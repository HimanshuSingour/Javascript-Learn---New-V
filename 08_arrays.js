// Arrays - having collection of multiple iteams. 

// shallow copy - the copy whose properties share the same references as those of the 
// source object from which the copy was made, result, change in copy object will
// also change in orginal one

// deep copy -> the copy whose properties do not share the same references as those of the 
// source object from which the copy was made, result, change in copy object will not
//  change in orginal one

const myArrayw = new Array(1 , 2 , 3);

const myArray = [1, 2, 3, 4, 5, 6];
const myArray2 = [7 , 8, 9, 10];

// 1. push() - Adds elements to the end of an array
myArray.push(7); 
console.log(myArray); // Output: [1, 2, 3, 4, 5, 6, 7]

// 2. pop() - Removes the last element from an array
myArray.pop(); 
console.log(myArray); // Output: [1, 2, 3, 4, 5, 6]

// 3. shift() - Removes the first element from an array
myArray.shift(); 
console.log(myArray); // Output: [2, 3, 4, 5, 6]

console.log("----- Spead Method -----");

// Spead
const all = [...myArray, ...myArray2];
console.log(all); // [ 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log("----- Flate Method -----");

const flatenArray = [[1, 2, 3], [2, 4, 6], [9, 8, 7], 1, 4,];
console.log(flatenArray.flat(Infinity)); // [ 1 , 2, 3, 2, 4, 6, 9 , 8, 7]


// 4. unshift() - Adds elements to the beginning of an array
myArray.unshift(0); 
console.log(myArray); // Output: [0, 2, 3, 4, 5, 6]

// 5. concat() - Merges two or more arrays
const newArray = myArray.concat([7, 8, 9]); 
console.log(newArray); // Output: [0, 2, 3, 4, 5, 6, 7, 8, 9]

// 6. slice() - Returns a shallow copy of a portion of an array into a new array
const slicedArray = myArray.slice(1, 4); 
console.log(slicedArray); // Output: [2, 3, 4]

// 7. splice() - Adds/removes elements from an array
myArray.splice(2, 1, 'new'); 
console.log(myArray); // Output: [0, 2, 'new', 4, 5, 6]

// 8. includes() - Checks if an array contains a certain value
const hasThree = myArray.includes(3); 
console.log(hasThree); // Output: false

// 9. indexOf() - Returns the first index at which a given element can be found
const index = myArray.indexOf(4); 
console.log(index); // Output: 3

// 10. find() - Returns the first element that satisfies a condition
const found = myArray.find((element) => element > 3); 
console.log(found); // Output: 4

// 11. findIndex() - Returns the index of the first element that satisfies a condition
const foundIndex = myArray.findIndex((element) => element > 3); 
console.log(foundIndex); // Output: 3

// 12. map() - Creates a new array with the results of calling a function on every element
const mappedArray = myArray.map((element) => element * 2); 
console.log(mappedArray); // Output: [0, 4, 'newnew', 8, 10, 12]

// 13. filter() - Creates a new array with elements that pass a test
const filteredArray = myArray.filter((element) => typeof element === 'number'); 
console.log(filteredArray); // Output: [0, 2, 4, 5, 6]

// 14. reduce() - Reduces an array to a single value by executing a reducer function
const sum = myArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0); 
console.log(sum); // Output: NaN ('new' is not a number so sum becomes NaN)

// 15. sort() - Sorts the elements of an array
const sortedArray = [4, 2, 1, 5, 3].sort(); 
console.log(sortedArray); // Output: [1, 2, 3, 4, 5]

// 16. reverse() - Reverses the elements of an array
myArray.reverse(); 
console.log(myArray); // Output: [6, 5, 4, 'new', 2, 0]

// 17. join() - Joins all elements into a string
const joinedString = myArray.join('-'); 
console.log(joinedString); // Output: '6-5-4-new-2-0'

// 18. forEach() - Executes a provided function once for each array element
myArray.forEach((element) => console.log(element)); 
// Output: 6 5 4 'new' 2 0 (each element printed separately)

// 19. some() - Checks if at least one element passes the test
const someCheck = myArray.some((element) => typeof element === 'string'); 
console.log(someCheck); // Output: true

// 20. every() - Checks if all elements pass the test
const everyCheck = myArray.every((element) => typeof element === 'number'); 
console.log(everyCheck); // Output: false

