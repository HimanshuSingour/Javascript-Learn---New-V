// this - refer to current context 

const objectS = {

    name: "Himanshu",
    lName: "Singour",

    welcome: function greeting(){
        console.log(`Welcome ${this.name}  ${this.lName}`);
        console.log(this); // current value ki baat
        
        
    }
}

Note:
// when print this in browser then its global value is: windpw
// when print this in node or any engine its global value is: empty

objectS.welcome()
console.log(this); // empty - node ke andar
