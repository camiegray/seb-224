// This is a console log statement
/* It prints "Hello World" to the console */
// // this is another way to comment

console.log("Hello World");


// const string =  "Hello World";

// variables
// let
// const
// Allocates space in memory to hold refercence data

let favSnack = "Reeses";
console.log(favSnack);


// const favMovie = "Holes"
// favMovie = "Interstellar" // this will throw an error because const variables cannot be changed
// console.log(favMovie);
// const is a constant variable 
// let is a variable that can be changed
// var is a variable that can be changed and is global
// var is not recommended to use
// let is recommended to use
// const is recommended to use for constants
// data types

// string
let stringVar = "Joe";
stringVar = "John";
stringVar = "Doe";
console.log( typeof stringVar);

// number
let numVar= 1
numVar = 2;
numVar = 3;
console.log(typeof numVar);


// boolean
let boolVar = true;         
boolVar = false;
console.log(typeof boolVar);


// undefined
let undVar;
undVar = undefined;
console.log(typeof undVar); 

// object
let objVar = {
    name: "Joe",
    age: 25,
    isStudent: true
}
objVar = {
    name: "John",
    age: 30,
    isStudent: false
} 

// null
let nullVar = null;
nullVar = null;
console.log(typeof nullVar);
nullVar = undefined;
console.log(typeof nullVar);
// null is an object type
// undefined is an undefined type
// null is a value that is intentionally set to null
// undefined is a value that is not set
// null is a value that is not set

// Template Literals
const playerName = "Camie"
let welcomeMessage = `Welcome to the app ${playerName}`
console.log(welcomeMessage)

// strirng concactination
welcomeMessage = "Welcome to the app " + playerName 
console.log(welcomeMessage)


const myName = "Camie"
let friendName = "Brandi"

let shortMessage = "Hey how ya doing " + friendName  + ", nice to meet you I'm " + myName + "."
console.log(shortMessage)


shortMessage = `Hey how ya doing ${friendName}, nice to meet you I'm ${myName}.`
console.log(shortMessage)




let num = 12
num.toString()

// CONTROL FLOW //
 