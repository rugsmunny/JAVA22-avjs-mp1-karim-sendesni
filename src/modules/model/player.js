export class Player {
    #name
    #score

    constructor(name) { this.#name = name; this.#score = 0;}

    getName(){
        return this.#name
    }

    getScore() {
        return this.#score;
    }

    addPoint() {
        this.#score++;
    }

    getPlayerScoreBoardEntry(){
        return { 'name':this.#name,'score': this.#score }
    }
}