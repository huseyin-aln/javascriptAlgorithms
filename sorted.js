// Write a Python/JavaScript code to sort the list/array below without using .sort() method.
// elements of list = [999, 333, 2, 8982, 12, 45, 77, 99, 11]
// Expected output:
// [2, 11, 12, 45, 77, 99, 333, 999, 8982]

// const arr = [999, 333, 2, 8982, 12, 45, 77, 99, 11];

// const sortedArr = arr.sort((a, b) => a - b);
// console.log(sortedArr);


// Write a code to find numbers which are divisible by 3 and 5, between 100 and 1000.

const divided = function(a, b) {
    for (let i = a; i <= b; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(i);
        }
    }
}

divided(100, 1000); 