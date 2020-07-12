const letter = require("./letter");
class Word {
    constructor(word) {
        this.name = word;
        this.letters = [];
        this.wordFmt = "";
    }
    create() {
        const arr = this.name.split("");
        let count = 0;
        arr.forEach(element => {
            this.letters.push(global['let_' + element] = new letter(element));
        });
    }
    format() {
        console.log("entered format");
        this.wordFmt = "";
        this.letters.forEach(element => {
            let pf = 'let_' + element.returnChar();
            pf = pf.replace(/^Let_/gi, "");
            this.wordFmt = this.wordFmt + " " + pf;
        });
    }
    guess(guess) {
        this.letters.forEach(element => {
            'let_' + element.return(guess);
        });
    }
}

let words = new Word("dfdfgpp paul");
console.log(words);
words.create();
words.guess("p");
words.guess("g");
words.guess("d");
const pf = let_p.name;
words.format();
console.log(words, words.wordFmt, pf);

module.exports = Word;

