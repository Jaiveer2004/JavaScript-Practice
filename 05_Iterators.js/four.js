// For In Loop

const myObject = {
    js : 'javascript',
    cpp : 'C++',
    py : 'Python',
    rb : 'Ruby'
}

for(key in myObject) {
    // console.log(key);

    // Output:
    // js
    // cpp
    // py
    // rb
}

for (const key in myObject) {
    // console.log(`${key} : ${myObject[key]}`);
    
    // Output:
    // js : javascript
    // cpp : C++
    // py : Python
    // rb : Ruby
}

// For In -> Arrays

const nums = [1, 2, 3, 4, 5]

for (const key in nums) {
    // console.log(key); // Will print out the indexes
    // console.log(nums[key]); // will print out numbers
}

// Map is not Iterable using For In
const map = new Map()
map.set('IN', "India");
map.set('US', "United States of America");
map.set('FR', "France");

for (const key in Map) {
    // console.log(key);
}