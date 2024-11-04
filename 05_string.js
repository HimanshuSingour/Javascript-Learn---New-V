let stringName = "Himanshu"
let repoCount = 70

// console.log(stringName + repoCount)

// String interpolation
// console.log(`hellow my name is ${stringName} and my repo is ${repoCount}`);


const gameName = new String("Himanshu");

// Commonly Used String Methods
console.log(gameName[0]);                 // H - Accessing a character using index
console.log(gameName.length);             // 8 - Length of the string
console.log(gameName.toUpperCase());      // HIMANSHU - Converts the string to uppercase
console.log(gameName.toLowerCase());      // himanshu - Converts the string to lowercase
console.log(gameName.charAt(2));          // m - Returns the character at the specified index

console.log(gameName.indexOf('a'));       // 3 - First occurrence of 'a' in the string
console.log(gameName.lastIndexOf('a'));   // 5 - Last occurrence of 'a' in the string

console.log(gameName.includes('man'));    // true - Checks if 'man' is present in the string
console.log(gameName.startsWith('Hi'));   // true - Checks if the string starts with 'Hi'
console.log(gameName.endsWith('u'));      // true - Checks if the string ends with 'u'



console.log(gameName.substring(2, 6));    // mans - Extracts characters from index 2 to 6 (excluding 6)
console.log(gameName.slice(-8, 2));        // mans - Extracts part of a string (similar to `substring`) 
console.log(gameName.split('a'));         // ['Him', 'nshu'] - Splits the string into an array



console.log(gameName.trim());             // 'Himanshu' - Removes whitespace from both ends



console.log(gameName.repeat(2));          // HimanshuHimanshu - Repeats the string twice
console.log(gameName.replace('man', 'bro')); // Himbroshu - Replaces 'man' with 'bro'
console.log(gameName.concat(' Sharma'));  // Himanshu Sharma - Concatenates the string with another string
console.log(gameName.padStart(10, '*'));  // **Himanshu - Pads the start with '*' to reach length 10
console.log(gameName.padEnd(10, '*'));    // Himanshu** - Pads the end with '*' to reach length 10
console.log(gameName.charCodeAt(0));      // 72 - Returns the Unicode value of the character at index 0
console.log(String.fromCharCode(72));     // H - Converts Unicode to a character
