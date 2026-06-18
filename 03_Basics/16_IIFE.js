// Immediately Invoked Function Expressions (IIFE)
// It is not only used to execute the function but also it is used to as sometimes problem happened due to global scope pollution so it is used to remove the pollution

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh');