// Date : Object
 
let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toTimeString())

// let myCreatedDate = new Date(2024, 0, 23)
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toDateString())
// Months start from zero in Js


// ---------TimeStamps---------

let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())

// console.log(Math.floor(Date.now() / 1000))


let newDate = new Date()
// console.log(newDate.getMonth())
// console.log(newDate.getDay() + 1)

newDate.toLocaleString('default', {
    weekday : "long" 
})

