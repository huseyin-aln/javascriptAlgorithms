// let x = 'This is an example';

// y = [];

// let z = x.split('');

// for (i = z.length - 1; i >= 0; i--) {
//     y.push(z[i])
// }

// y = y.join("")

// console.log(y);


let sentence = "Hello World, Javascript is the best!"

// let reversed = sentence.split("").reverse().join("");

let reversed = sentence.split("").reverse().join("").split(" ").reverse().join(" ");

console.log(reversed);