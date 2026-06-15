// Primitive 
// 7 types : String, Number, Boolean, null, undefined, Symbol,BigInt

// JavaScript is a dynamically typed language.
// eg.
// const score = 100 //here  we didn't declare the data type

// Symbol
// const id = Symbol('123') 
// const AnotherId = Symbol('123') 
// console.log(id===AnotherId);

// const bigNumber = 2398649826386023644n



// Non-Premitive (REFERENCE TYPE)
// Array, Objects, Functions

// const heros = ["Shakriman", "Naagraj", "Kriss"];//Array

// let myObj = {
//     name: "Sahil",
//     age:22
// } //Object

// const myFunction = function(){
//     console.log("Hello Sahil");
    
// }

// +++++++++++++++++++++++++++++++++++++++++++++++
// MEMORY

//Stack (PRIMITIVE) and Heap (NON-PRMITIVE)



// STACK
// let myYouTUbeName  = "Sahilkumarvlogs"
// let anotherName = myYouTUbeName// we get the copy of the data
// anotherName = "chaiorcode"
// console.log(myYouTUbeName);
// console.log(anotherName);



// HEAP
let userOne = {
    email : "user@gmail.com",
    upi : "user@ybl",
}
let userTwo = userOne; // we get reference of the data
userTwo.email = "Sahil@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);








