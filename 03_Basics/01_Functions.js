// A function is a package which can we used again and again

function sayMyName() {
    console.log("J")
    console.log("A")
    console.log("I")
    console.log("V")
    console.log("Y")
}

sayMyName // Reference of Function
// sayMyName() // Execution of Function

// Void Function : No returning value
function addTwoNums(a, b) {
    console.log(a + b)
}

// addTwoNums() // NaN + NaN = NaN
// addTwoNums(2, 7) // 2 + 7 = 9
// addTwoNums(2, "3") // 2 + "3" = "2" + "3" = "23"
// addTwoNums(2, "a") // 2 + "a" = "2" + "a" = "2a"
// addTwoNums(2, null) // 2 + null = 2 + 0 = 2
// addTwoNums(2, undefined) // 2 + und = 2 + NaN = NaN

// Function with a returing value
function addTwoNumbers(a, b) {
    return a + b
}

const result = addTwoNumbers(3, 5)
// console.log(result);


function loginUserMessage(username) {
    if(!username) {
        console.log("Please enter username")
        return
    }
    return `${username} just logged in.`
}

// console.log(loginUserMessage("Jaiveer"))
// console.log(loginUserMessage())

// Usage of rest operator (Also known as Spread Operator)
function calculateCartPrice(...num1) {
    return num1;
}

// console.log(calculateCartPrice(500, 600, 700));

// How to pass objects in a function?
const user = {
    userName : "Jaiveer",
    price : 200
}

function handleObjects(anyobject) {
    console.log(`Username is ${anyobject.userName} and price is ${anyobject.price}.`);    
}

// handleObjects(user)
handleObjects({
    userName : "Kalu",
    price : 208
})

const newArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {
    return getArray[2]
}

console.log(returnSecondValue(2))