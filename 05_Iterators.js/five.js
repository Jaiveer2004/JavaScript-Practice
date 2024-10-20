// For Each

const arr = [1, 2, 3, 4, 5]

// This is a callback function, so it does not have any name
// "item" refers to each element of that array
arr.forEach(function (item) {
    // console.log(item);
})

// Using arrow function
arr.forEach( (item) => {
    // console.log(item);
})

// Using "pehle se defined" function 
function printMe(item) {
    // console.log(item);
}
arr.forEach(printMe);

// Using variable function
const fun = function(item) {
    // console.log(item);
}
arr.forEach(fun)

// Other parameters of forEach
arr.forEach((item, index, arr) => {
    // console.log(item, index, arr);

    // Output
    // 1 0 [ 1, 2, 3, 4, 5 ]
    // 2 1 [ 1, 2, 3, 4, 5 ]
    // 3 2 [ 1, 2, 3, 4, 5 ]
    // 4 3 [ 1, 2, 3, 4, 5 ]
    // 5 4 [ 1, 2, 3, 4, 5 ]
})

// Arrays with objects
// Iteration on array with objects
const myCoding = [
    {
        langName : "javascript",
        langExt : "js"
    },

    {
        langName : "c++",
        langExt : "cpp"
    },

    {
        langName : "python",
        langExt : "py"
    }
]

myCoding.forEach( (item) => {
    // console.log(item.langName);
    // console.log(item.langExt);
})

