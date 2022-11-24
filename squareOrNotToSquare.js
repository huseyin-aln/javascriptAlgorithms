//* To square(root) or not to square(root)

// DESCRIPTION:
// Write a method, that will get an integer array as parameter and will process every number from this array.

// Return a new array with processing every number of the input-array like this:

// If the number has an integer square root, take this, otherwise square the number.

// [4,3,9,7,2,1] -> [2,9,3,49,4,1]

let arr = [4, 3, 9, 7, 2, 1];

function process(array) {
  return array.map((x) => {
    const n = Math.sqrt(x);
    return n % 1 == 0 ? n : x * x;
  });
}

console.log(process(arr));
