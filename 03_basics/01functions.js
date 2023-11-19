const sum = function (a, b) {
    return a + b;
}

function addTwoNumbers(num1, num2) {
    console.log(num1 + num2);
}

// console.log(sum(1, 2));
// addTwoNumbers(1, 2);

function loginUserMessage(username = "sam") {
    if(!username) {
        console.log("Please enter the username!!!");
        return
    }
    return `${username} logged in successfully`
}

// console.log(loginUserMessage("sample"));

function calculateCartPrice(val1, val2, ...num1) {
    return num1
}


// console.log(calculateCartPrice(123,12,3, 34));

const user = {
    username: "priyansu",
    price: 123
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

const newArray = [12, 23, 44, 45, 22,34]

function returnSecondArray(getArray) {
    return getArray[1]
}

// console.log((returnSecondArray(newArray)));