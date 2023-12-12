const user = {
    username: "Priyansu",
    price: 344,
    welcomeMsg: function() {
        console.log(`${this.username}, welcome to the website...`)
        console.log(this);
    }
}

// user.welcomeMsg()

// user.username = "Liza"
// user.welcomeMsg()
// console.log(this);

function coffee() {
    let username = "Liza"
    console.log(this.username); //works only under objects and not in functions
}

// coffee()

const chai = () => {
    let username = "chai"
    console.log(this); 
}

// chai()

//explicit return type
const addTwo = (num1, num2) => {
    return (num1 + num2)
}

//implicit return used only for single line output
//remember the objects can only be returned in the parentheses
//and not in open
const addThree = (num1, num2, num3) => (num1 + num2 + num3)

const myName = () => ({username: "Priyansu"})