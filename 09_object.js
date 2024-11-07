// Objects literals

const mySymp = Symbol("Key12")

let myObj = {

     name: "Himnashu",
     email: "user@gmail.com",
     roll: 12,
     [mySymp]: "MyKey",
     "fullName": "Himanshu Singour"

}

console.log(myObj.name); // name: "Himnashu",
console.log(myObj["fullName"]); // "fullName": "Himanshu Singour"


console.log(myObj[mySymp]);
console.log(mySymp);


// all methods 

// 1. Object.keys() - Get an array of all keys (excluding symbols)
console.log(Object.keys(myObj)); // ['name', 'email', 'roll', 'fullName']

// 2. Object.values() - Get an array of all values (excluding symbols)
console.log(Object.values(myObj)); // ['Himnashu', 'user@gmail.com', 12, 'Himanshu Singour']

// 3. Object.entries() - Get an array of key-value pairs (excluding symbols)
console.log(Object.entries(myObj)); 
// [['name', 'Himnashu'], ['email', 'user@gmail.com'], ['roll', 12], ['fullName', 'Himanshu Singour']]

// 4. Object.hasOwnProperty() - Check if a specific property exists (only direct properties)
console.log(myObj.hasOwnProperty('email')); // true
console.log(myObj.hasOwnProperty('name')); // false



// 5. Object.assign() - Shallow copy an object or merge multiple objects into one
const copiedObj = Object.assign({}, myObj); // Shallow copy
console.log(copiedObj); // { name: 'Himnashu', email: 'user@gmail.com', roll: 12, fullName: 'Himanshu Singour' }


const additionalObj = { age: 25 };
const mergedObj = Object.assign(myObj, additionalObj);
console.log(mergedObj); // { name: 'Himnashu', email: 'user@gmail.com', roll: 12, fullName: 'Himanshu Singour', age: 25 }

// 6. Object.freeze() - Freeze the object to make it immutable (no changes allowed)
const frozenObj = Object.freeze(myObj);
frozenObj.name = "Changed";  // Will not change
console.log(frozenObj.name); // 'Himnashu'

// 7. Object.seal() - Prevent new properties from being added but allow modification of existing properties
const sealedObj = Object.seal(myObj);
sealedObj.name = "Changed"; // Modification allowed
delete sealedObj.email; // Deletion not allowed
console.log(sealedObj); // { name: 'Changed', email: 'user@gmail.com', roll: 12, fullName: 'Himanshu Singour' }

// 8. Object.getOwnPropertySymbols() - Retrieve symbols used as keys in an object
console.log(Object.getOwnPropertySymbols(myObj)); // [ Symbol(Key12) ]

// 9. Object.defineProperty() - Define a new property or modify an existing one with fine control
Object.defineProperty(myObj, 'age', {
    value: 25,
    writable: false, // Cannot modify
    enumerable: true, // Will show in Object.keys()
    configurable: false // Cannot delete
});
console.log(myObj.age); // 25
myObj.age = 30; // This will not work, as writable is false
console.log(myObj.age); // 25

// 10. Object.is() - Strict equality check, even for edge cases
console.log(Object.is(NaN, NaN)); // true
console.log(Object.is(+0, -0)); // false


// Destrucuring


let courseDetails = {

    coursName: "Java Spring Boot",
    price: "2999",


}

//  Normal Way.
// console.log(courseDetails.coursName);


// const {coursName: coursename} = courseDetails
// console.log(coursename);

// 1. Asaani se Properties Access Karna
const {coursName: name, price,  time = '2 min', } = courseDetails
console.log(price);

// Default Value Set Karna
console.log(time);

// Variable Ko Rename Karna
console.log(name);




