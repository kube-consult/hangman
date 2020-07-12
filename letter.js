class Letter {
    constructor(name) {
      this.name = name;
      this.char = "_";
      this.correct = false;
    }
    return (letterguess){
        if(this.name === letterguess ){
            this.char = this.name;
            this.correct = true;
            return(this.correct);
        } else {
            this.correct = false;
            return(this.correct);
        }
    }
  }
  module.exports = Letter;



