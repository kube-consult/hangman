const Word = require("./word");
var inquirer = require("inquirer")
const artists = ["perl jam","fleetwood mac"]

class Game {
    constructor() {
        Game.count = 10;
    }
    continue() {

        inquirer.prompt([
            {
                type: "checkbox",
                message: "Do you wish to continue?",
                name: "exiting",
                choices: [
                    "Y",
                    "N"
                ]
            }
        ]).then(function (data) {

        });

    }
    pickLetter() {
        if (Game.count = 0){
            console.log("No more guesses - you LOSE - word is.... ")
            console.log(words.name);
            games.continue();
        }
        inquirer.prompt([
            {
                type: "input",
                name: "letterChoice",
                message: "Pick a letter"
            }
        ]).then(function (data) {
            Game.count = (parseInt(Game.count) - 1);
            console.log("You have " + Game.count + " Guesses remaining.")
            words.guess(data.letterChoice);
            console.log(words);
        });


    }
    GenerateWord() {
        
    }
}

let games = new Game();
let words = new Word("Perl Jam");
words.create();
let count = 1;
while (count < 10) {
    console.log("loop count " + count);
    count++;
    init()

}

async function init() {
    console.log("hi")
    try {
        console.log("loop inner  " + count);
      const answers = await games.pickLetter();
    } catch(err) {
      console.log(err);
    }
  }



//words.guess("P");
//words.guess("g");
//words.guess("d");
//const pf = let_p.name;
//words.format();
//console.log(words, words.wordFmt, pf);