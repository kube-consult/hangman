//const word = ["p","a","u","l"];

class Letter {
    constructor(name) {
      this.name = name;
      this.char = "_";
      this.correct = false;
    }
    return (letterguess){
        if(this.name === letterguess){
            this.correct = true;
            this.char = this.name;
            return(this.char);
        } else {
            return(this.char);
        }
    }
    returnChar(){
        return(this.char);
    }
  }
  module.exports = Letter;

  //p = new Letter("p");
  //a = new Letter("a");
  //u = new Letter("u");
  //l = new Letter("l");
  //p.return("f");
  //console.log(p,a,u,l);


