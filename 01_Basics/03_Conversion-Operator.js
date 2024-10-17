let score = "33a"

// console.log(typeof score)

// Conversion to Number
let valueInNumber = Number(score) // Will convert String to Number
// console.log(typeof valueInNumber)
// console.log(valueInNumber)

// NaN : Not a Number 

// If the "string" contains only number, it would get converted to "number" but if the "string" contain numbers as well as charachters, it would result in NaN.

// If we convert null to Number, it will give a value of 0.
// null : 0

// If we convert undefined to Number, it will give a value of NaN

// In Short
// "33" => 33
// "33ab" => NaN
// null => 0
// undefined => NaN
// true => 1, false => 0

// Conversion to Boolean
let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(typeof booleanIsLoggedIn)
// console.log(booleanIsLoggedIn)

// In Short
// 1 : true
// 0 : false
// "" : false
// "Jaiveer" : true

// Conversion to String
let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber)
// console.log(typeof stringNumber)

// ****************Operations**********************

let value = 3
negValue = -value
// console.log(negValue)

let str1 = "Hello"
let str2 = " Jaiveer"

let str3 = str1 + str2
// console.log(str3)

// During these operations, it gets converted to the type of value which is at first. 
// console.log("1" + 2) // It will get converted to "String"
// console.log(1 + "2") // It will get converted to "Number"
// console.log("1" + 2 + 2) // It will get converted to "String"
// console.log(1 + 2 + "2") // It will get converted to "Number"


// console.log(+true)
// console.log(+"")

let num1, num2, num3
num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter
// console.log(gameCounter)

