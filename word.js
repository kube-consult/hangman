const letter = require("./letter");
class Word {
    constructor(word) {
        this.name = word;
        this.letters = [];
        this.wordFmt = "";
    }
    create() {
        const arr = this.name.split("");
        arr.forEach(element => {
            this.letters.push(new letter(element));
        });
    }
    format() {
        this.wordFmt = "";
        this.letters.forEach(element => {
            if (element.name === " ") {
                this.wordFmt = this.wordFmt + "  ";
            } else {
                this.wordFmt = this.wordFmt + " " + element.char;
            }
        });
        console.log("\n" + this.wordFmt + "\n");

    }
    guess(guess) {
        let resbool = false;
        this.letters.forEach(element => {
            const res = element.return(guess);
            if (res === true){
                console.log("\nCorrect Guess " + guess + " is a letter in the artist string!!\n");
                resbool = true;
            }
        });
        if (!resbool === true){
        console.log("\nFailed Guess " + guess + " is not a letter in the artist string.\n");
        }
        this.format();
    }
}

module.exports = Word;

