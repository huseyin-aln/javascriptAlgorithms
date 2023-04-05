//! Between Extremes

// Given an array of numbers, return the difference between the largest and smallest values.

// For example:

// [23, 3, 19, 21, 16] should return 20 (i.e., 23 - 3).

// [1, 434, 555, 34, 112] should return 554 (i.e., 555 - 1).

// The array will contain a minimum of two elements. Input data range guarantees that max-min will cause no integer overflow.

function betweenExtremes(numbers) {
  let max = numbers[0];

  for (let i = 0; i < numbers.length; i++) {
    if (max < numbers[i]) {
      max = numbers[i];
    }
  }

  let min = numbers[0];

  for (let i = 0; i < numbers.length; i++) {
    if (min > numbers[i]) {
      min = numbers[i];
    }
  }
  return max - min;
}

// const betweenExtremes = numbers => Math.max(...numbers) - Math.min(...numbers);

console.log(betweenExtremes([21, 34, 54, 43, 26, 12])); // 42
