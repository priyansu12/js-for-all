// const tinderUser = new Object() -->Singleton objecy
const tinderUser = {} // --> Non-singleton object

tinderUser.name = 'tinder'
tinderUser.email = 'tinder@233.com'
tinderUser.id = '123www'
tinderUser.isLoggedIn = false


const regularUser = {
    email: "abc@email.com",
    fullname: {
        firstName: "abc",
        lastName: "xyz"
    },
}


// console.log(regularUser.fullname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {2: "c", 3: "d"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3)


const users = [
    {
        id: 1,
        email: "example@example.com"
    },
    {
        id: 1,
        email: "example@example.com"
    },
    {
        id: 1,
        email: "example@example.com"
    }
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('name'));


const course = {
    coursename: "html and css",
    price: 122,
    courseInstructor: "Priyansu"
}


//APIS

/* Some important tools
Step 1 - randomuseme api;
Step 2 - json formatter to understand the data in it...
Step 3 - Understand its values and data types in it ...
Step 4 - Apply every possible combinations of the data in the api to understand it better
*/


//Destructuring and Structuring
// course.courseInstructor

// const {courseInstructor: instructor} = course

// console.log(instructor);

// const navBar = ({company}) => {
//     return (
//         <div>
//             <h1>Navbar</h1>
//         </div>
//     )
// }

// navBar(company = "InFyro")