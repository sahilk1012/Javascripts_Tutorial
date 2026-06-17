// singleton is made by the constructers it means it is the only one type of the object
// Object.create// this is the constructer method


// object literals  doesn't make the singletom ,it makes multiple instances with this method
const mySym = Symbol("key1")
const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",//the 1st way is not able to access the data when the data is like this in the object so we use the 2nd way..

    // mySym: "mykey1",// // wrong syntax

    [mySym]: "mykey1",// correct syntaxto use as a symbol

    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
//methods to access data
// console.log(JsUser.email)        //->1st
// console.log(JsUser["email"])     //->2nd
// console.log(JsUser["full name"]) //->2nd

// console.log(JsUser.mySym)

// console.log(JsUser[mySym])//in some special cases like in this object example we ue this way to access the data of the symbol




// JsUser.email = "hitesh@chatgpt.com"
// // Object.freeze(JsUser)//it blocks any changes in the object
// JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

// JsUser.greeting = function(){
//     console.log("Hello JS user");
// }
// JsUser.greetingTwo = function(){
//     console.log(`Hello JS user, ${this.name}`);//to reference the same object we use the 'this.____'
// }
// console.log(JsUser.greeting);
// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());
