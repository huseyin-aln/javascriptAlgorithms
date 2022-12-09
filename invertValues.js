//!  Invert values

// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []

function invert(array) {
  let invert = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      invert.push(array[i] - array[i] * 2);
    } else if (array[i] < 0) {
      invert.push(Math.abs(array[i]));
    } else if (array[i] == 0) {
      invert.push(-0);
    }
  }
  return invert;
}

console.log(invert([1, 2, 3, 4, 5]));
