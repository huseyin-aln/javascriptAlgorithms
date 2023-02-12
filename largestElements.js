//! Largest Elements

// Write a program that outputs the top n elements from a list.

// Example:

// largest(2, [7,6,5,4,3,2,1])
// => [6,7]

function largest(n, array) {
  let arr = array.sort((a, b) => b - a);
  let result = arr.slice(0, n);
  return result.sort((a, b) => a - b);
  //   return result.reserve();
}

console.log(largest(2, [7, 6, 5, 4, 3, 2, 1])); // [6, 7]
