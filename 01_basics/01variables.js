const accountId = 1223;
let accountEmail = "priyansu@gmail.com";
var accountPassword = "12344";
accountCity = "Jaipur";

//using let the problem of scope has been removed easily in JS
/*
prefer not to use var in writing the js code
*/
//accountId = 0 //not allowed
accountEmail = "ok@ok.com";
accountPassword = "2233";
accountCity = "Delhi";

console.table([accountEmail, accountPassword, accountCity, accountId]);
