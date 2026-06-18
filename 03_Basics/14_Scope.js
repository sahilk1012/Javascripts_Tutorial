//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // var c=30   // this doesn't not follow the scope rules like it print the value if it is console outside and it print the value of the inside var c of the if statement that is logically not appropriate accoding to the scope rules..
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);0

//NOTE FOR INTERVIEW-> the global scope for the web browser console is diffeen from the vs code or any other ide 

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)//this wil give error as we are running this before its declaratin
const addTwo = function(num){//in this we are not only declaring the function but also putting that in the variable that's why it will be problematic\
    // we are understand this by the Hoisting concept
    return num + 2
}