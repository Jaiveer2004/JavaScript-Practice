// Immediately Invoked Fucntion Expressions (IIFE)
// Immediatly execute function after writing the function 

(function chai() {
    console.log("DB CONNECTED");
    // This is also known as named IIFE, as it has a name "Chai"
})();
// it will run without function call
// To prevent the pollution of varibales of the global scope
// if we create one more function under it, if there is no semicolon at teh end of the second paranthesis () which is for execution, it will cause an error.
// So, add a semicolon to the end of the execution call to prevent this error.

// The same can be written as Arrow Function
( () => {
    console.log("DB CONNECTED TWO");
}) ();

// Arrow function with parameter
( (name) => {
    console.log(`Hi, ${name}`);
}) ("Jaiveer");
