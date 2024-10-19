const userEmail = "h@hitesh.ai"

// if(userEmail) {
//     console.log("Got user email")
// } else {
//     console.log("Don't have user email.")
// }

// Empty String ("") is considered False
// Empty Array ([]) is considered True

/*
Falsy Value : 
false
0
-0
BigInt-> 0n
""
null
undefined
NaN

*/

/*
Truty Values:
"0"
"false"
" " (with space)
[] (empty array)
{} (empty object)
fucntion() {} (empty function)
*/

// if(userEmail.length === 0) {
//     console.log("Empty");
// }

// if(Object.keys({})) {
//     console.log("Empty"); 
// }

// Nullish Coalescing Operator(??) : null, undefined
// For Safety check

let val1;
val1 = 5 ?? 10;
// console.log(val1); // 5

val1 = null ?? 10
// console.log(val1); // 10 : Safety check on null

val1 = undefined ?? 15
// console.log(val1); // 15

// Ternary Operator
// condition ? true : false 

const iceTeaPrice = 100;

iceTeaPrice <= 80 ? console.log("Low") : console.log("High");