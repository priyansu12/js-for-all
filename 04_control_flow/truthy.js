const userEmail = "p@priyansu.com";

if (userEmail) {
  console.log("Email is valid");
} else {
    console.log("Email is not valid");
}

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0", 'false', " ", [], true, {}, function() {}

// if (userEmail.length === 0) {
//     console.log("Array is Empty"); //Array issue
// }

const emptyObj = {};

if (Object.keys(userEmail).length === 0) {
    console.log("Object is Empty"); //Object issue
}

// Nullish Coalescing Operator (??) : null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10
val1 = null ?? 10 ?? 20
console.log(val1); // 5


// Ternary Operators

// consdition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("greater than 80")