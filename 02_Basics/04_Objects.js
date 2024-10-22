const tinderUser = new Object() // Singleton object
// const tinderUser = {} // Non Singleton Object

tinderUser.id = "123abc"
tinderUser.Name = "Sammy"
tinderUser.isLoggedIn = false


// console.log(tinderUser)

const regularUser = {
    email : "some@gmail.com",
    UserName : {
        fullName : "Jaiveer",
        lastName : "Singh"
    }
}

// console.log(regularUser.UserName.fullName);

// How to Combine two Objects?
const obj1 = {
    1 : "a",
    2 : "b"
}

const obj2 = {
    3 : "c",
    4 : "d"
}

const obj3 = {obj1, obj2}
// console.log(obj3);

// const obj4 = Object.assign(obj1, obj2)
const obj4 = Object.assign({}, obj1, obj2) // You can add more values to it after adding "{}" as first parameter
// console.log(obj4);

// Using Spread Operator
const obj5 = {...obj1, ...obj2} 
// console.log(obj5)

// JSON : Javascript Object Notation
const users = [
    {
        id : 1,
        email : "j@email.com"
    },

    {
        id : 2,
        email : "k@gmail.com"
    }
]

// console.log(tinderUser)

const abc = {
    1 : "a",
    2 : "b",
    3 : "c",
    4 : "d",
    5 : "e"
}

// console.log(abc)

// console.log(Object.keys(abc));
// console.log(Object.values(abc));
// console.log(Object.entries(abc));
// console.log(abc.hasOwnProperty("Name")); 

// How to extract keys from an object?
// console.log(Object.keys(tinderUser)) 

// How to extract values from an object?
// console.log(Object.values(tinderUser));

// Entries in Object
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwn("Name")); 

// Destructuring of array

const course = {
    courseName : "js in hindi",
    price : "999",
    courseInstructor : "Hitesh"
}

// course.courseInstructor

const {courseInstructor} = course
// console.log(courseInstructor)
const {courseInstructor : instructor} = course
// console.log(instructor)

// API : Application Program Interface
// JSON Structure : Object with no name (In crux)
/*
{
    "courseName" : "js in hindi",
    "price" : "999",
    "courseInstructor" : "Hitesh"
}

OR

[
    {},
    {},
    {}
]
    
*/