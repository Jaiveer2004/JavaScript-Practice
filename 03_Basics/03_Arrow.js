const user = {
    username : "Jaiveer",
    price : 999,
    welcomeMessage : function() {
        // "this" refers to current context. Here current context is this function. So, to use any of the value from this context (scope), we use "this.key".
        console.log(`${this.username}, welcome to website! `); 
        console.log(this); // This will show the whole scope of current context.
        
    }
}

// user.welcomeMessage();
// user.username = "Singh"; // Here value of current context has been changed
// user.welcomeMessage(); 

// console.log(this); // This will show empty, Inside node environment "this" is referred to empty object as there is no context in global scope.
// When "this" is used in Browser Console, we get different output. Here "this" is referred to "Window" object which is a global object and capture all the Window Events such as Click, form submit, etc.

function chai() {
    let username = "Jaiveer"
    console.log(this); // this will show a lot of values
    console.log(this.username); // this will show "undefined" value
    // "this" can only be used in an object
}

// chai(); // chai function call

const chaiTwo = function() {
    let username = "Jaiveer"
    console.log(this); // same for it 
}
// chaiTwo();

const arrowChai = () => {
    let username = "Jaiveer"
    console.log(this); 
}

// arrowChai();

// **************************Arrow*******************

// () => {}

// Basic Arrow Function
// Explicit return
const addTwo = (num1, num2) => {
    return num1 + num2;
}
// console.log(addTwo(2, 3));

// Implicit return in an arrow function
// const fun_name = (parameter) => (return value)
const addTwo2 = (num1, num2) => (num1 + num2);
// console.log(addTwo2(3, 5));

// How to return an object?
const displayObject = () => ({username: "Jaiveer"})
// console.log(displayObject())

// "this" in loops
const myArray = [2, 5, 3, 7, 8];
// myArray.forEach(function () {})
// myArray.forEach(() => ())
