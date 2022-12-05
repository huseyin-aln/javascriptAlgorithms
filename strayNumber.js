// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

function stray(numbers) {
  let n = numbers[0];

  if (n !== numbers[1] && n !== numbers[2]) return n;

  for (let i = 1; i < numbers.length; i++) {
    if (n !== numbers[i]) {
      return numbers[i];
    }
  }
}

const data = [17, 17, 3, 17, 17, 17, 17];
console.log(stray(data));
