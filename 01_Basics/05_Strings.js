const name = "Jaiveer"
const repoCount = 50

// console.log(name + repoCount + " Value") // Outdated

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}.`)

const gameName = new String("Jaiveer-Singh")

// console.log(gameName[0])`    `
// console.log(gameName.__proto__)

// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(2))
// console.log(gameName.indexOf("e")) // First Occ

const newString = gameName.substring(0, 4)
// console.log(newString)

const anotherString = gameName.slice(1, 4)
// console.log(anotherString)

const newStringOne = "   Jaiveer    "
// console.log(newStringOne)
// console.log(newStringOne.trim()) // removes spaces from start and end

const url = "https://www.google.com/"

// console.log(url.replace("www.", ""))
// console.log(url.includes("www"))

// Convert String to Array based on a condition
console.log(url.split("."))

