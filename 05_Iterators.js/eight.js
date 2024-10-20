// Reduce : 


const myNums = [1, 2, 3];

const myTotal = myNums.reduce(function(acc, currVal) {
    // console.log(`acc: ${acc} and currVal: ${currVal}`);
    return acc + currVal;
}, 0)
// console.log(myTotal);

const myTotal2 = myNums.reduce((acc, currVal) => (acc + currVal), 0);
// console.log(myTotal2);

const shoppingCart = [
    {
        itemName : "js course",
        itemPrice : 2999
    },

    {
        itemName : "py course",
        itemPrice : 3999
    },

    {
        itemName : "c++ course",
        itemPrice : 8000
    }
]

const shoppingCartTotal = shoppingCart.reduce((acc, item) => (acc + item.itemPrice), 0)
console.log(shoppingCartTotal);
