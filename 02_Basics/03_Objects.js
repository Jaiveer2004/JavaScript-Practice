// Singleton : Object when declared using Constructor
// Non Singleton : Object when declared using Literals

// Obejct Literals:

// How to declare an Object?
// Object.create() // Constructor Method : Used to make singleton
const mySym = Symbol("key1") 

const JsUser = {
    // key : value pairs
    name : "Jaiveer", // It is processed as : "name" : "Jaiveer"
    age : 20,
    location : "Patiala",
    email : "jaiveer@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"],
    "Full-Name" : "Jaiveer Singh", // This can't be accessed using (.) operator
    [mySym] : "myKey1" // this is how we use symbol in an object
}

// How to access values of objects?
// console.log(JsUser.email)
// console.log(JsUser['name'])
// console.log(JsUser['Full-Name'])
// console.log(JsUser[mySym])


// How to change values of an object
JsUser.email = "jaiveer@chatgpt.com"
// Object.freeze(JsUser) // This will block the user to further change values in the object

// Functions can be added in an object
// Functions can be treated as variables in Js.

JsUser.greeting = function() {
    console.log("Hello Js User")
}

JsUser.greeting2 = function() {
    console.log(`Hello, ${this["Full-Name"]}`)
}

// JsUser.greeting()
// JsUser.greeting2()
