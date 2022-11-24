//*  Square(n) Sum

// DESCRIPTION:
// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

// let arr = [1, 2, 2];
// let count = 0;
// let x = arr
//   .map((x) => x * x)
//   .forEach((a) => {
//     count += a;
//   });
// console.log(count);

// for (let i = 0; i < x.length; i++) {
//   count += x[i];
// }

// console.log(count);

let numbers = [1, 2, 2];

function squareSum(numbers) {
  let sum = 0;
  numbers.forEach((e) => {
    sum += e * e;
  });
  return sum;
}

console.log(sum);
