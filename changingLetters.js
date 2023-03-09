//! Changing letters

// When provided with a String, capitalize all vowels

// For example:

// Input : "Hello World!"

// Output : "HEllO WOrld!"

function swap(string) {
  let vowels = ["a", "e", "i", "o", "u"];
  let splitStr = string.split("");
  // console.log(splitStr);
  let mapStr = splitStr.map((i) => (vowels.includes(i) ? i.toUpperCase() : i));
  //  console.log(mapStr);
  return mapStr.join("");
}

// const swap = (string) => string.replace(/[aeiou]/g, (v) => v.toUpperCase());

console.log(swap("Hello World!"));
