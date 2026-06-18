
// function sayMyName(){
//     console.log("H");
//     console.log("I");
//     console.log("T");
//     console.log("E");
//     console.log("S");
//     console.log("H");
// }

// // sayMyName()

// // function addTwoNumbers(number1, number2){

// //     console.log(number1 + number2);
// // }

// function addTwoNumbers(number1, number2){

//     // let result = number1 + number2
//     // return result
//     return number1 + number2
// }

// const result = addTwoNumbers(3, 5)

// // console.log("Result: ", result);



// // function loginUserMessage(username){
// //     return `${username} just logged in`
// // }
// // console.log(loginUserMessage("hitesh"))//this will give output as "hitesh just logged in"


// // function loginUserMessage(username){
// //     if(username === undefined){
// //         console.log("PLease enter a username");
// //         return
// //     }
// //     return `${username} just logged in`
// // }
// // console.log(loginUserMessage(""))// this will give output as "undefined just logged in" as we didn't pass any arguments.

// function loginUserMessage(username){
//     if(!username){//by using !-not sign we make it always false so that it doesn't enter in the condition except for (false,0,"",null,udefined,NaN)
//         console.log("PLease enter a username");
//         return
//     }
//     return `${username} just logged in`
// }

// function loginUserMessage(username = "sam"){//by making the username sam it will by default print "sam just logged in".
//     if(!username){//because of the default argument sam we will never enter in the condition statement
//         console.log("PLease enter a username");
//         return
//     }
//     return `${username} just logged in`
// }
// // console.log(loginUserMessage("hitesh"))


// REST PARAMETER
// function calculateCartPrice(val1, val2, ...num1){
//     return num1
// }

// // console.log(calculateCartPrice(200, 400, 500, 2000))

// const user = {
//     username: "hitesh",
//     prices: 199
// }

// function handleObject(anyobject){
//     console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
// }

// // handleObject(user)
// handleObject({
//     username: "sam",
//     price: 399
// })//direct passing in the func.

// const myNewArray = [200, 400, 100, 600]

// function returnSecondValue(getArray){
//     return getArray[1]
// }

// // console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 400, 500, 1000]));

// Another way to declare a function
const chai = function () {
    let username = "hitesh"
    console.log(username);
}

chai()