export class Game {

    #weapons = ['ROCK', 'PAPER', 'SCISSORS'];

    constructor() {};

    setCpuChoice() { return this.#weapons[Math.floor(Math.random() * 3)]; }

    getResultOfRound(playerChoice, cpuChoice) {

        return playerChoice === cpuChoice ? 'TIE' :
            ((playerChoice === 'ROCK' && cpuChoice === 'SCISSORS') ||
                (playerChoice === 'PAPER' && cpuChoice === 'ROCK') ||
                (playerChoice === 'SCISSORS' && cpuChoice === 'PAPER')) ? 'WIN' : 'LOSE';

    }
}
