//array

const myArr = [1,2,32,4,5] 

const myArr2 = new Array(1,2,3,4)

// methods
// myArr.push(2)

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(5))

const newArray = myArr.join('.')
// console.log(myArr)
// console.log(newArray)

// slice and splice
console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)
console.log(myn1)
console.log("B ", myArr)


const myn2 = myArr.splice(1, 3)
console.log(myn2)
console.log("C ", myArr)

