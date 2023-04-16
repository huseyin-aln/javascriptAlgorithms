//! Insert dashes

// Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.

// Note that the number will always be non-negative (>= 0).

function insertDash(num) {
  let newNum = num.toString().split("");

  for (let i = 0; i < newNum.length; i++) {
    if (newNum[i] % 2 > 0 && newNum[i + 1] % 2 > 0) {
      newNum[i] = newNum[i] + "-";
    }
  }

  return newNum.join("");

  //   return num.toString().replace(/[13579](?=[13579])/g, "$&-");
}

console.log(insertDash(454793)); // 4547-9-3
console.log(insertDash(123456)); // 123456
