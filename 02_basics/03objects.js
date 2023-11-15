// singleton instance are only for constructor based and not for literal based
// Object.create() // this is constructor based

// object literals

const fatherName = Symbol("fathersname")

const jsUser = {
    name: "Priyansu",
    [fatherName]: "Pradeep",
    "full name": "Priyansu sekhar", //no chance that this value can be accessed using the dot operator
    age: 18,
    location: "India",
    email: "priyansu@gmail.com",
    isLoggedIn: false
}

console.log(jsUser.age)
console.log(jsUser["name"])