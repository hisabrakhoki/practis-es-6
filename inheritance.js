class Father{
    constructor(){
        this.fatherName = "Kasem bin hota"
    }
}

class Sons extends Father{
    constructor(son){
        super()
        this.sonName = son;
    }
    getFullName(){
      return this.sonName + " " + this.fatherName
    }
}

const son1 = new Sons("arnold");
const son2=new Sons("Kabir")
console.log(son1.getFullName());
console.log(son2.getFullName());