const findSquares = (x, y) => {
  let result = 0;
  let i = 0;

  if (x < y) {
    // if x side is less than y
    // iterate until x greater than 0

    while (x > 0) {
      // update result
      result += Math.floor(y / x);

      let i = y % x;
      y = x;
      x = i;
    }
    return result;
  } else {
    // if y side is less than x
    // iterate until y greater than 0

    while (y > 0) {
      // update result
      result += Math.floor(x / y);

      let i = x % y;
      x = y;
      y = i;
    }
    return result;
  }
};
console.log(findSquares(7, 20));
