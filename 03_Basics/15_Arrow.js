//+++++++  THIS and ARROW FUNCTION  +++++++//


const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);//this will give empty paranthesis

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);//this will give undefinded.becuse here is not any object here to access.
// }
// chai()


// function chai(){
//     let username = "hitesh"
//     console.log(this);//this will give lots of the data 
// }
// chai()


// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);but "This" used inside the function will  give output as undefined.
// }

// this is the example of the arrow function
const chai =  () => {
    let username = "hitesh"
    console.log(this);//this line will give the empty paranthesis output
    console.log(this.username);//This will give undefined as output
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2//IMPLICITE RETURN
// }

// const addTwo = (num1, num2) =>  num1 + num2//EXPLICITE RETURN

// const addTwo = (num1, num2) => ( num1 + num2 )//EXPLICITE RETURN

const addTwo = (num1, num2) => ({username: "hitesh"})//to get object in return we need to wrap the object inside the paranthesis 


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()


// ++++++++  NOTE  +++++++++//
//in arrow function we can not use the "This" value but in normal function we can use it ..
//because arrow function takes "this" from the outer scope (global scope)..