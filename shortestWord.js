//! Shortest Word

// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s) {
  let newS = s.split(" ");
  let shortest = "";
  let shortestLength = newS[0].length;

  for (let i = 0; i < newS.length; i++) {
    if (newS[i].length < shortestLength) {
      shortestLength = newS[i].length;
      shortest = newS[i];
    }
  }
  return shortestLength;
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
