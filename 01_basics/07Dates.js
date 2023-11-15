let myDate = new Date()
// console.log(myDate.toString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toDateString())
// console.log(typeof myDate)

// let myCreatedDate = new Date(2021, 2, 12);
// let myCreatedDate = new Date(2021, 2, 12, 4, 5);
// let myCreatedDate = new Date("2023-01-12");
let myCreatedDate = new Date("01-12-2023");

// console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()
// console.log(Math.floor(myTimeStamp / 1000)) // in s
// console.log(myCreatedDate.getTime()) //in ms

let newDate = new Date()
// console.log(newDate)
// console.log(newDate.getDate())
// console.log(newDate.getMonth())

newDate.toLocaleString('default', {
    weekday: "long"
})