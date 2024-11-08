// // this - refer to current context 

// const objectS = {

//     name: "Himanshu",
//     lName: "Singour",

//     welcome: function greeting(){
//         console.log(`Welcome ${this.name}  ${this.lName}`);
//         console.log(this); // current value ki baat
        
        
//     }
// }

// Note:
// // when print this in browser then its global value is: windpw
// // when print this in node or any engine its global value is: empty

// objectS.welcome()
// console.log(this); // empty - node ke andar


// Arrow Function 

// Note:
// in both we cannot user the this. value arrow or simple function

// const s = () => {}

// const arrowFunction = () => {
// console.log("This is an Arrow Function");
// }


// arrowFunction()

// implecitly return - no need to write the return keyword

// const arrowFunction = () => console.log("This is an Arrow Function");
// arrowFunction()

// +++++++++++++ Funtion Special ------------

// IIFE - Immediately Invoked Function Expressions

// ek aisa JavaScript function hai jo turant declare aur execute hota hai. 
//Yeh function parentheses ke andar 
//likha hota hai aur uske turant baad () 
//lagate hain taaki woh execute ho sake bina kisi aur call ke.

// Yeh pattern use karne ka primary purpose hai 
//global scope pollution se bachna. Matlab, agar
 //aap variables ya functions banate ho bina kisi function 
 //ke andar rakhe, toh woh global scope mein chale jaate hain, jo aapke
 //code mein bugs ya conflicts create kar sakte hain.

// (function himm(){
//     console.log("DB CONNECTED");
    
// }())


// end of the conext batana

// Name IIFE
(function himm(){
    console.log("DB CONNECTED");
    
})();

(() => {
    console.log("DB CONNECTED 2");
    
})();

// variable pass

((name) => {
    console.log(`${name}`);
    
})("Himanshu");

