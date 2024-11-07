function adtwoNumber(a , b){
    return a + b;
}
console.log(adtwoNumber(1 , 2));

function adtwoNumber(name = "Robot"){
    return `My Name is ${name}`;
}
console.log(adtwoNumber("Himanshu"));

// Case - spread ya rest operator

// rest operator - function ke parameter me use
// spread operator - kisi array ya object ko spread
// karte waqt use ho raha hai

function numbers(...num){
    return num;
}

const a = numbers(2 , 2, 3, 3, 4)
console.log(a);


// FUNCTION IS OBJECT

const user = {
    username: "hitesh",
    price: 90
}

function handleObject(anyObject){
    console.log(`${anyObject.username} && ${anyObject.price}`);
    
}
handleObject(user)


const arrayIteams = [12 , 12, 34, 45, 66, 78]

function handleObject(anyArray){
    console.log(`${anyArray[4]} && ${anyArray[2]}`);
    
}
handleObject(arrayIteams)