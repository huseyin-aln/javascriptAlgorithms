//! Next Palindromic Number

// There were and still are many problem in CW about palindrome numbers and palindrome strings. We suposse that you know which kind of numbers they are. If not, you may search about them using your favourite search engine.

// In this kata you will be given a positive integer, val and you have to create the function next_pal()(nextPal Javascript) that will output the smallest palindrome number higher than val.

// nextPal(11) == 22

// nextPal(188) == 191

// nextPal(191) == 202

// nextPal(2541) == 2552

// You will be receiving values higher than 10, all valid.

// function reversed(num) {
//   let reversed = "";
//   numS = num.toString();
//   for (let i = numS.length - 1; i >= 0; i--) {
//     reversed += numS[i];
//   }
//   return reversed;
// }

// function Palindrome(num) {
//   if (num.toString().length < 2) {
//     return num + 1;
//   }
//   for (let i = num + 1; ; i++) {
//     if (i.toString() === reversed(i)) {
//       return i;
//     }
//   }
// }

// console.log(Palindrome(23));

function nextPal(val) {
  for (let i = val + 1; ; i++) {
    if (String(i) == String(i).split("").reverse().join("")) {
      return i;
    }
  }
}

console.log(nextPal(23));
