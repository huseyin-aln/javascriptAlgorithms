//! Mispelled word

// Create a function mispelled(word1, word2):

// mispelled('versed', 'xersed'); // returns true
// mispelled('versed', 'applb'); // returns false
// mispelled('versed', 'v5rsed'); // returns true
// mispelled('1versed', 'versed'); // returns true
// mispelled('versed', 'versed'); // returns true
// It checks if the word2 differs from word1 by at most one character.

// This can include an extra char at the end or the beginning of either of words.

// In the tests that expect true, the mispelled word will always differ mostly by one character. If the two words are the same, return True.

const mispelled = (word1, word2) => {
  if (Math.abs(word1.length - word2.length) > 1) {
    return false;
  }

  if (Math.abs(word1.length - word2.length) === 1) {
    return word1.includes(word2) || word2.includes(word1);
  }

  let result = 0;
  for (let i = 0; i < word1.length; i++) {
    if (word1[i] !== word2[i]) {
      result += 1;
    }
  }
  return result <= 1 ? true : false;
};

console.log(mispelled("versed", "xersed")); // true
console.log(mispelled("versed", "applb")); // false
console.log(mispelled("versed", "versed1")); // true
