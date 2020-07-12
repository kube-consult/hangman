const Word = require("./word");
var inquirer = require("inquirer")
const artists = ["perl jam", "fleetwood mac"]

class Game {
    constructor() {
        this.count = 0;
    }
    async continue() {

        return inquirer.prompt([
            {
                type: "confirm",
                message: "Do you wish to play again?",
                name: "exiting",
            }
        ])
    }
    async makeAGuess() {
        const { letterChoice }  = await this.pickLetter(); 
        words.guess(letterChoice);
        if (!words.wordFmt.includes("_")){
            console.log("\n" + "***** You Win - word is.... ***** " + "\n");
            console.log(words.wordFmt + "\n");
            const { exiting}  = await this.continue();
            if (exiting){
                this.start();
            } else {
                process.exit(0);
            }
        } else if (this.count > 0) {
            this.count--;
            await this.makeAGuess();
        } else {
            console.log("No more guesses - you LOSE - word is.... \n");
            console.log(words.name + "\n");
            const { exiting}  = await this.continue();
            if (exiting === "true"){
                console.log("entered true");
                this.start();
            } else {
                process.exit(0);
            }
        }
    }

    pickLetter() {
        return inquirer.prompt([
            {
                type: "input",
                name: "letterChoice",
                message: "Pick a letter"
            }
        ])
    }
    start() {
        console.log("Starting");
        const artists = ["perl jam", "fleetwood mac","madonna,","michael jackson"]
        const randomItem = artists[Math.floor(Math.random()*artists.length)];
        words = new Word(randomItem);
        words.create();
        console.log("\nGuess the following artist by entering the correct letters one at a time.")
        words.format();
        this.count = ((words.wordFmt.length / 2) + 10);
        console.log("You have " + this.count + " guesses to WIN.\n")
        games.makeAGuess();

    }
}

let games = new Game();
let words = {}; 
games.start();
