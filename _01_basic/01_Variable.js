const accountId=12345;
let accountEmail="deepak123@gmail.com"
var accountPassword="12345"
accountCity="pune";
let accountState;

// console.table([accountId,accountEmail,accountPassword,accountCity])

{
    var accountPassword="1234";
    let accountEmail="dv@gmail.com"
    console.table([accountEmail,accountPassword])
}
// outof scope also var changes all same referenced in file so currently mostly use let 
console.table([accountEmail,accountPassword,accountState])