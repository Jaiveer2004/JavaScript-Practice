// High Order Array loops 
// Array specific loops

// For of

// ["", "", ""] Array with string values
// [{}, {}, {}] Array with object values

// Valid for Strings, Arrays, Maps
// Array
const arr = [1, 2, 3, 4, 5];
for (const element of arr) {
    // console.log(element);
}

// String
const str = "Hello, Hi!";
for (const element of str) {
    console.log(element);   
}

// Maps : 
// Holds key value pairs
// Order of addition is retained
// Uniqe values : They work as set, not duplicate values are allowed

const map = new Map()
map.set('IN', "India");
map.set('US', "United States of America");
map.set('FR', "France");

// console.log(map);

for(const element of map) {
    // console.log(element)

    // Output:
    // [ 'IN', 'India' ]
    // [ 'US', 'United States of America' ]
    // [ 'FR', 'France' ]
}

// By Destructuring of Array  
for (const [key, value] of map) {
    // console.log(key);
    // Output:
    //IN
    // US
    // FR

    // console.log(key + ":- " + value);
    // Output
    // IN:- India
    // US:- United States of America
    // FR:- France   
}

// Objects are not iterable, we can't use "for of" in it.
