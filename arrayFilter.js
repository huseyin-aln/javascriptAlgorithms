// JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

// The solution would work like the following:

// getEvenNumbers([2,4,5,6]) // should == [2,4,6]

const numbers = [2, 4, 5, 6];

//! ANSWER 1:

// const getEvenNumbers = [];

// for (let i = 0; i <= numbers.length - 1; i++) {
//     if (numbers[i] % 2 === 0) {
//         getEvenNumbers.push(numbers[i]);
//     }
// }

// console.log(getEvenNumbers);

//! ANSWER 2:
// const getEvenNumbers = numbers.filter(EvenNumbers)

// function EvenNumbers (i) {
//     if (i % 2 == 0) {
//         return i
//     }
// }

// console.log(getEvenNumbers);

//! ANSWER 3:

const getEvenNumbers = numbers.filter((a) => ! (a % 2))

console.log(getEvenNumbers);