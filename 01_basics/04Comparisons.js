console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true

//comparisons convert null to a number, treating it as 0
// === checks both values and dtypes

//primitive dtypes - 7
// String, number, boolean, null, undefined, symbol, bigint

const id = Symbol('123')
const id2 = Symbol('123')
const bigNum = 1213312132n;

const heros = ["yest", "agfy", "aigf"];
let myObj = {
    name: "Priyansu",
    age: 21
}

console.log(id == id2) //false
//Reference types - non-primitive
//array, object, functions, 

const myFunc =  function () {
    console.log("Hello");
}


//Stack - Primitve, Heap - Non-primitive

//in stack the copy is changed but in heap the refernce is changed

let myinstaName = "priyansu123";
let anotherName = myinstaName;
anotherName = "test";
console.log(anotherName)
console.log(myinstaName)

let user = {
    email: "name@gmail.com",
    upi: "ui@okaxis"
}

let userTwo = user;
userTwo.email = "you@example.com ";
console.log(user.email);
console.log(userTwo.email);


//outputs
