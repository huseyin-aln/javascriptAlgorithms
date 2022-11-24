//! Equal Sides Of An Array

// DESCRIPTION:
// You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

// For example:

// Let's say you are given the array {1,2,3,4,3,2,1}:
// Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.

function findEvenIndex(arr) {
  let leftSide = 0;
  let rigthSide = 0;
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  if (arr.length == 0) {
    return -1;
  }

  for (let i = 0; i < arr.length; i++) {
    if (i == 0) {
      rigthSide = arr.slice(1).reduce(reducer, 0);
      if (rigthSide === i) {
        return i;
      }
    } else {
      leftSide = arr.slice(0, i).reduce(reducer, 0);
      rigthSide = arr.slice(i + 1).reduce(reducer, 0);
      if (leftSide == rigthSide) {
        return i;
      }
    }
  }
  return -1;
}
