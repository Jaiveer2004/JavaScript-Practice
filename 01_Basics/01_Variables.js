// Const can't be changed
const accountId = 144553
// accountId = 2 // This will throw an error.

// Removed the historical problem of scope during the time of 'var'
let accountEmail = "jaiveer@gmail.com"
accountEmail = "jaiveer2@gmail.com"

// Prefer not to use var beacuse of issue in block scope and functional scope
var accountPassword = "12345"
accountPassword = "8528"

// This is also legal in JavaScript, as JavaScript is a safe language
accountCity = "Patiala"
accountCity = "Mohali"

// If any value is not provided, it takes "undefined" by default.
let accountState

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])