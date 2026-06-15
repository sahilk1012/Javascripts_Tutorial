const accountId = 22344
let accountEmail = "sahilk1012gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"


// accountId = 2 //not allowed
accountEmail = "sk@gmail.com"
accountPassword = "4321"
accountCity = "BANGLORE"

console.log(accountId);


/*
Prefer not to use "var" because of the issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity]);

