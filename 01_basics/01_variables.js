const accountId = 12345
let accountEmail = "aditya@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState; //in js if you declare a variable and do not assign any value then js considers it as 'undefined'

// accountId = 2 // not allowed


accountEmail = "ad@ad.com"
accountPassword = "215151515"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])