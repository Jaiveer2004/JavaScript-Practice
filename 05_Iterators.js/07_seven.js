// Map
const nums = [1, 2, 3, 4, 5, 7, 8, 9, 10]

// const newNums = nums.map((item) => (item + 10))
// console.log(newNums);

// Chaining
newNums = nums
    .map((num) => (num * 10))
    .map((num) => (num + 1))
    .filter((num) => (num >= 40))

console.log(newNums);

