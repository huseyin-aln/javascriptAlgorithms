//! Debug Sum of Digits of a Number

// Debug   function getSumOfDigits that takes positive integer to calculate sum of its digits. Assume that argument is an integer.

// Example
// 123  => 6
// 223  => 7
// 1337 => 14

function getSumOfDigits(integer) {
  let sum = 0;
  let digits = Math.floor(integer).toString();

  for (let i = 0; i < digits.length; i++) {
    sum += Number(digits[i]);
  }
  return sum;
}

console.log(getSumOfDigits(123)); // 6
