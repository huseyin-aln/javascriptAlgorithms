// You have an array of non-negative integers. You need to calculate the difference between the 1st biggest number and the 2nd biggest number of the array.

//     diffBig2([10, 5, 2]);
// In this case, the 1st biggest number is 10 and the 2nd biggest number is 5. So, the function returns 5, the result of 10 - 5.

// You can assume that the input array has 2 or more elements.

// The input array has the sort method disabled, so you will have to solve it in another way.

function diffBig2(arr) {
  // with sort() method :
  // let newArr = arr.sort((a,b) => a - b)
  // let len = newArr.length
  // return newArr[len-1] - newArr[len-2]

  // without sort() method
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[i]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  return arr[arr.length - 1] - arr[arr.length - 2];
}

console.log(diffBig2([10, 5, 2]));
