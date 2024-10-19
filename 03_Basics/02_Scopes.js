//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);

}



// console.log(a);
// console.log(b);
// console.log(c);


function one() {
    const username = "hitesh"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5)) // Javascript is a loose language, you can define any function anywhere ans then use there call back anywhere in the scope, even on the top of it.

function addone(num) {
    return num + 1
}


// Also known as Expression : Function in a variable
// addTwo(5) // This will cause an error because it is declared as a variable : Also known as Function Hoisiting
const addTwo = function (num) {
    return num + 2
}

addTwo(3);