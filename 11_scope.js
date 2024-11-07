

// why "var" is not using much

// Global scope: access from anywher
// local scope: access with in the scope, like function , if else


if(null){

    // a and b is in the scope of if but var not , its also have global scope nature
let a = 10;
const b = 20;
var c = 30;

}

// console.log(a);
// console.log(b);
// console.log(c);

// Nested Scope - scope ke andr scope


