// While, If, Else Statements, Break

// ...

// Higher Order Array Loops

const arr = [1 , 2 , 3 , 4]

// print for value
// for(const num of arr){
//     console.log(num);  
// }

// // print for index of array

// for(const num in arr){
//     console.log(num); 
// }

// Maps

// const myMap = new Map();
// myMap.set('1' , "Himanshu",)
// myMap.set('2' , "Singour",)
// myMap.set('3' , "Aman",)
// myMap.set('4' , "Alok",)

// for(const [key, value] of myMap){
//     console.log(`my key is ${key}, my values is ${value}`);
// }

// Objects
// const myObjec = {
//     "name" : "Himanshu",
//     "Placed" : "Yes",
//     "Class" : "12"
// }

// for(const num in myObjec){
//     console.log(`my key is ${num}, my values is ${myObjec[num]}`);
// }


//foreach
const array = [1 , 2, , 3, 4, 5, 6, 7]

array.forEach( function (item){
    console.log(item);
    
})

// array
array.forEach( (item) =>{
    console.log(item);
    
})

// more things it give 
array.forEach( (item, index , array) =>{
    console.log(item , index , array);
    
})



