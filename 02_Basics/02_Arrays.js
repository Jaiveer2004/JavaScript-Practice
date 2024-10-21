const arr1 = [1, 2, 3, 4]
const arr2 = [5, 6, 7, 8]

// arr1.push(arr2)
// console.log(arr1)

const arr3 = arr1.concat(arr2)
// console.log(arr3)


// Spread Operator
const arr4 = [...arr1, ...arr2]
// console.log(arr4)

// Flat Operator
const arr5 = [1, 2, 3, 4, [5, 6], 7, 8, 9, [10, 11, [12, 13, 14]]]
// console.log(arr5.flat(Infinity));

// console.log(Array.from("Jaiveer"));
