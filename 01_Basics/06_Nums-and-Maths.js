// ---------------------------Nums-------------------

const score = 400
// console.log(score) 

// If we want to define the type of the data statically
const balance = new Number(400)
const name = new String("Hello")

// console.log(balance) // This gives output as "Number : 400"

// console.log(balance.toString())  
// console.log(balance.toFixed(2)) // used to fix the decimals as "2".

const otherNumber = 123.9666
// console.log(otherNumber.toPrecision(4))

const hundreds = 100000 
// console.log(hundreds.toLocaleString())
// console.log(hundreds.toLocaleString('en-IN'))

// ++++++++++++++++++++++++ Maths +++++++++++++++++++++

// console.log(Math)
// console.log(Math.abs(-4))
// console.log(Math.round(82.785))
// console.log(Math.ceil(4.2))
// console.log(Math.floor(4.2))
// console.log(Math.min(7, 2, 0))
// console.log(Math.max(7, 2, 0))


// Math.Random

// console.log(Math.random()) // Provides value between 0 and 1

// console.log((Math.random() * 10) + 1) // Random decimal values between 0 and 1 gets multiplied with 10 and hence provides numbers between 0 and 10, "+1" is beacuse we don't want 0 as value

// console.log(Math.floor(Math.random() * 10 + 1)) // Provides integers between 0 and 10

const min = 10 // Minimum value
const max = 20 // Maximum value

// console.log(Math.floor(Math.random() * (max - min + 1)) + min)

