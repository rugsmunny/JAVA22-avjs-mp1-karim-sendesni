import {DomComponents} from "./modules/view/domComponents.js";
import {HighscoreHandler} from "./modules/controller/highscoreHandler.js";
import {FireBaseDb} from "./modules/controller/fireBaseDb.js";
import {Game} from "./modules/model/game.js";
import {Player} from "./modules/model/player.js";

window.addEventListener('load', async () => {
    hh.setHighScore(await fb.get());
    updateScoreBoard();
});

const dc = new DomComponents();
const hh = new HighscoreHandler();
const fb = new FireBaseDb();
const game = new Game();

let player;

dc.setSubmitBtnClickEventCallBack(checkNameIsRegistered);
dc.setWeaponBtnsClickEventCallBack(updateRoundInfo);

function checkNameIsRegistered(event) {
    event.preventDefault();
    const playerName = dc.getInputName();
    playerName === '' ? reloadPage() : startGame(playerName);
}

function reloadPage() {
    alert('Försöker du ge mig IG?\nSkriv något i textrutan först SEN kan du klicka dig vidare...');
}

async function startGame(playerName) {

    player = new Player(playerName);

    hh.addEntry(player.getPlayerScoreBoardEntry());

    dc.toggleHidden(dc.getRegisterForm());
    dc.toggleHidden(dc.getGameContainer());
    dc.setPlayerNameOutput(player.getName());
    dc.setPlayerScoreOutput(player.getScore());

    updateScoreBoard();

}

async function updateRoundInfo(event) {

    const cpuChoice = game.setCpuChoice();

    dc.setPlayerChoiceOutput(event.target.innerText);
    dc.setCpuChoiceOutput(cpuChoice);

    await updateScore(game.getResultOfRound(event.target.innerText, cpuChoice));

}

async function updateScore(winOrLose) {
    dc.setWinOrLoseOutput(winOrLose);
    switch (winOrLose) {
        case 'WIN' :
            player.addPoint();
            dc.setPlayerScoreOutput(player.getScore());
            hh.updatePlayerScore(player)
            updateScoreBoard();
            break;
        case 'LOSE' :
            dc.setPlayerScoreOutput(`Final score: ` + player.getScore());
            dc.toggleHidden(dc.getWeaponsContainer());
            const dBData = hh.getHighScoreForDb();
            await fb.put(dBData);
            restartGame();
            break;
    }
}

function updateScoreBoard() {

    dc.clearHighscoreOutput();
    const entries = hh.getHighScore();

    entries.forEach((obj, index) => {
        if (index < 5) {
            const pElement = document.createElement('p');
            pElement.innerText = (1 + index) + '. ' + obj.name + ': ' + obj.score;
            dc.addHighscoreEntry(pElement);
        }
    })
}

function restartGame() {

    const div = document.createElement('div');
    const anchorElementNo = document.createElement('a');
    anchorElementNo.innerText = 'NEJ';
    anchorElementNo.setAttribute('class', 'no');

    anchorElementNo.href = 'https://youtu.be/wDYNVH0U3cs?t=3&autoplay=1';
    const anchorElementYes = document.createElement('a');
    anchorElementYes.setAttribute('class', 'yes');
    anchorElementYes.innerText = 'JA';
    anchorElementYes.href = '.';

    div.innerText = '\n\nVill du spela igen?';
    div.append(anchorElementNo, anchorElementYes);
    dc.appendRematchQuery(div);
}

