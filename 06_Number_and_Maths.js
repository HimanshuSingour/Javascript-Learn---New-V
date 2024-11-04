// const score = 10022
// console.log(score); // 100

const scoreObject = new Number(345.23);

console.log(scoreObject);                    // [Number: 345.23] - Represents the number object

console.log(scoreObject.toString().length);  // 6 - Converts the number to string and returns its length
console.log(scoreObject.toFixed(2));         // 345.23 - Rounds the number to 2 decimal places

console.log(scoreObject.toPrecision(3));     // 345 - Limits the number to 3 significant digits

const hundred = 100000000;

console.log(hundred.toLocaleString('en-IN')); // "10,00,00,000" - Formats the number with Indian number system

// More commonly used methods:
console.log(Number.isInteger(scoreObject));   // false - Checks if the number is an integer
console.log(Number.isNaN(scoreObject));       // false - Checks if the value is NaN (Not a Number)
console.log(Number.isFinite(scoreObject));    // true - Checks if the value is a finite number

console.log(Number.parseInt(scoreObject));    // 345 - Parses the number and returns the integer part
console.log(Number.parseFloat(scoreObject));  // 345.23 - Parses the number and returns it as a float


// ----------------------- Maths ----------------------

console.log("------ Maths -----");


const mathsPlay = new Number(345.23);

console.log(Math.round(mathsPlay));         // 345 - Rounds the number to the nearest integer
console.log(Math.ceil(mathsPlay));          // 346 - Rounds the number up to the next integer
console.log(Math.floor(mathsPlay));         // 345 - Rounds the number down to the nearest integer

console.log(Math.abs(-345.23));               // 345.23 - Returns the absolute value of the number
console.log(Math.max(345, 23, 100));          // 345 - Returns the largest number in the provided arguments
console.log(Math.min(345, 23, 100));          // 23 - Returns the smallest number in the provided arguments
console.log(Math.pow(2, 3));                  // 8 - Returns 2 raised to the power of 3
console.log(Math.sqrt(16));                   // 4 - Returns the square root of 16
console.log(Math.random());                   // Random number between 0 and 1
// 10,00,00,000


// find the random with given number

// Steps:

// Math.random() generates a number between 0 and 1.
// We scale it to our desired range (10 to 20) by multiplying it by (max - min + 1) and adding min to shift the range.
// Use Math.floor() to round it down to the nearest whole number.

// How it works:

// Math.random() generates something like 0.57 , 0.23.
// Multiply it by (max - min + 1) (which is 11 here), so 0.57 * 11 = 6.27.
// Add min (10), so 6.27 + 10 = 16.27.
// Use Math.floor() to round it down to 16.

const min = 10
const max = 20

const randomNumber = Math.random();
const ResultFormula = randomNumber * (max - min + 1) + min
const convertItToSingleValue = Math.floor(ResultFormula);

console.log(convertItToSingleValue)


