// // if

// const isUserLoggedin = true
// const temp = 23

// if (temp == 23) {
//     console.log("less than 50");
// } else {
//     console.log("not crct input");
// }

// //comparation operators >, <, <=, >= and ===, !==.

// if (score > 1111) {
//     let power = "fly" //to remove the scope error we can use var but it is considered to use let in order to get the right notations

//     console.log(`User power: ${power}`);
// }

// const balance = 500;

// if (balance > 122) {
//     console.log("not enough money");
// } else if (balance < 122) {
//     console.log("balance is enough");
// } else {
//     console.log("nothing");
// }

const userLoggedIn = true;
const debitCard = true;
const loggedFromGoogle = false;
const loggedFromEmail = false;

if (userLoggedIn && debitCard) {
    console.log("Allow to buy course");
}

if (loggedFromGoogle || loggedFromEmail) {
    console.log("Allow to buy course");
}