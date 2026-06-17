// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }//this is problematic
// const obj3 = Object.assign({}, obj1, obj2, obj4)
//                                ________________
//                            ⬆️        ⬆️
// syntax                   Target      source 


const obj3 = {...obj1, ...obj2} //Simple syntax
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]// this is array dont misunderstood with the object and in this array we store the objects

users[1].email// as this is the array we can access the array by user[1] and them use the object syntax to find the email like this user[1].email..
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));    --
// console.log(Object.values(tinderUser));    |-> this  give the array values that will help us to perform operations using the loops
// console.log(Object.entries(tinderUser)); --

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));//this is the method to find  that tha object have this property or not..


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

console.log(course.courseInstructor)

//+++++DESTRUCTURING++++++++//


// const {courseInstructor} = course//this syntax is used to reduce the writing of the course.courseInstructor to only courseInstructor
// console.log(courseInstructor);


const {courseInstructor: instructor} = course// this is used to change the variable name of the key inside the objects

// console.log(courseInstructor);
console.log(instructor);


//Below is the syntax of the json format of data that comes when we get the data from the api
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }
//Sometimes we also get the data in the array in which there is json
// [
//     {},
//     {},
//     {}
// ]