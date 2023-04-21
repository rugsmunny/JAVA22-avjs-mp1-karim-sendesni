export class FireBaseDb {
    #URL = 'https://highscore-41a5e-default-rtdb.europe-west1.firebasedatabase.app/.json';

    constructor() {}

    async get() {
        return await fetch(this.#URL)
            .then(resp => resp.json())

    }

    async put(data) {
        console.log(data)
        const header = {
            "Content-type": "application/json; charset=UTF-8"
        }
        const option = {
            method: "PUT", body: JSON.stringify(data), headers: header
        };

        await fetch(this.#URL, option);
    }

}