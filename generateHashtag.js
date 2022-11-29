// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.

// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "  =>  "#HelloWorld"
// ""                        =>  false

function generateHashtag(str) {
  let wordArr = str.split(" ").filter((char) => char !== "");

  let result = "#";

  if (wordArr.length === 0) {
    return false;
  }

  result += wordArr
    .map((word) => {
      let capitalized = word.charAt(0).toUpperCase() + word.slice(1);
      return capitalized;
    })
    .join("");

  if (result.length > 140) {
    return false;
  } else {
    return result;
    // console.log(result);
  }
}

generateHashtag(" Hello there thanks for trying my Kata ");
