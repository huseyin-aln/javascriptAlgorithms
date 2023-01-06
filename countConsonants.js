//! Count consonants

// Write a function consonantCount, consonant_count or ConsonantCount that takes a string of English-language text and returns the number of consonants in the string.

// Consonants are all letters used to write English excluding the vowels a, e, i, o, u.

function consonantCount(str) {
  let consonants = [
    "b",
    "c",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "m",
    "n",
    "p",
    "q",
    "r",
    "s",
    "t",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let newStr = str.toLowerCase().split("");
  let count = 0;
  for (let i = 0; i < newStr.length; i++) {
    if (consonants.includes(newStr[i])) {
      count++;
    } else {
      count = count;
    }
  }
  return count;
}

console.log(consonantCount("helLo world"));
