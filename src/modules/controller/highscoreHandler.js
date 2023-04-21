export class HighscoreHandler {
    #highScoreTop5;

    constructor() {
    }

    setHighScore(highscore) {
        this.#highScoreTop5 = highscore;
    }

    getHighScore() {
        this.sortHighScore();
        return this.#highScoreTop5;
    }

    addEntry(value) {
        this.#highScoreTop5.push(value);
    }

    sortHighScore() {
        this.#highScoreTop5.sort((a, b) => {
            if ((a.score) > (b.score)) {
                return -1;
            }
        })
    }

    updatePlayerScore(player) {
        const index = this.#highScoreTop5.findIndex(obj => obj.name === player.getName());
        if (index !== -1) {
            this.#highScoreTop5[index].score = player.getScore();
        }
    }

    getHighScoreForDb() {
        this.#highScoreTop5 = this.#highScoreTop5.slice(0, 5);
        return this.#highScoreTop5;
    }

}