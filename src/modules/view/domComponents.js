export class DomComponents {
    //HTML COMPONENTS

    //Register player form
    #registerForm = document.querySelector('#register-form'); //toggleHidden
    #playerNameInput = document.querySelector('#name-input'); //.value
    #submitPlayerBtn = document.querySelector('#submit-player-btn'); //listen
    //Info outputs
    #playerNameOutput = document.querySelector('#player-name-output'); //printOut
    #playerChoiceOutput = document.querySelector('#player-choice-output'); //printOut
    #playerScoreOutput = document.querySelector('#player-score-output'); //printOut
    #cpuChoiceOutput = document.querySelector('#cpu-choice-output'); //printOut
    #winOrLoseOutput = document.querySelector('#result-output'); //printOut
    #highscoreOutput = document.querySelector('#highscore-output'); //printOut
    //Game interactions
    #gameContainer = document.querySelector('#game-container'); //toggleHidden
    #weaponsContainer = document.querySelector('#weapons-container'); //toggleHidden
    #weaponBtns = document.querySelectorAll('#weapons-container button') //listen

    constructor() {}
    setWeaponBtnsClickEventCallBack(callBack){
        this.#weaponBtns.forEach(btn => btn.addEventListener('click', callBack))
    }
    setSubmitBtnClickEventCallBack(callBack){ this.#submitPlayerBtn.addEventListener('click', callBack); }
    getInputName() { return this.#playerNameInput.value; }
    setPlayerNameOutput(value) { this.#playerNameOutput.innerText = value; }

    addHighscoreEntry(element) { this.#highscoreOutput.append(element); }

    clearHighscoreOutput() { this.#highscoreOutput.innerHTML = ''; }

    setPlayerChoiceOutput(value) { this.#playerChoiceOutput.innerText = value; }

    setPlayerScoreOutput(score) { this.#playerScoreOutput.innerText = score; }

    setCpuChoiceOutput(value) { this.#cpuChoiceOutput.innerText = value; }

    setWinOrLoseOutput(value) { this.#winOrLoseOutput.innerText = value; }

    appendRematchQuery(value){ this.#winOrLoseOutput.insertBefore(value, this.#winOrLoseOutput.children[0]); }

    getRegisterForm(){ return this.#registerForm };
    getGameContainer(){ return this.#gameContainer };
    getWeaponsContainer(){ return this.#weaponsContainer };

    toggleHidden(target) { target.classList.toggle('hidden'); }
}

