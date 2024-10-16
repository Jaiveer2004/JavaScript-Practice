// On the basis of how data is stored in the memory, datatypes are divided into two types.

// 1. Primitive Data Types : Call by value data types
// 7 types: String, Number, Boolean, Null, undefined, Symbol (Used to make values unique), BigInt  

// Dynamically Typed Language : We don't need to define the type of data of the variables
const score = 100 

// How to declare a symbol?
const id = Symbol("123") // This will be unique
const anotherId = Symbol("123") // This will be unique

// console.log(id === anotherId) // will return false as Symbol will create a unique for each.

// BigInt
// const bigNumber = 5245221212257758526555n

// 2. Non Primitive Data Types : Reference Type
// Arrays, Objects, Functions

// Arrays
const heros =  ["Shaktiman", "Naagraj", "Doga"]
// console.log(typeof heros) // will return object

// Objects
const hero = {
    name : "Jaiveer",
    age : 20
}
// console.log(typeof hero) // will return object


// Functions
const myFunction = function() {
    console.log("Hello World")
}
// console.log(typeof myFunction) // will return function (Function Object)

