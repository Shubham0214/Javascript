const accountId=144553
let accountEmail = "shubham@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"


// accountId=2  //Not allowed any update after const keyword

accountEmail = "abc@abc.com"
accountPassword= "21212121"
accountCity="Azamgarh"


console.log(accountId);

/*
Prefer not to use var
because in issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity])