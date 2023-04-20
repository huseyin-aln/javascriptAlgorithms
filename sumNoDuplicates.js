//! Sum a list but ignore any duplicates

// Please write a function that sums a list, but ignores any duplicate items in the list.

// For instance, for the list [3, 4, 3, 6] , the function should return 10.

function sumNoDuplicates(numList) {
  let sum = 0;
  let arr = [];
  numList.forEach((num) => {
    if (numList.indexOf(num) === numList.lastIndexOf(num)) {
      arr.push(num);
      sum += num;
    }
  });
  return sum;
}

console.log(sumNoDuplicates([3, 4, 3, 6])); // 10
