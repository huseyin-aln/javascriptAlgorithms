//! Remove exclamation marks

// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
  let arr = s.split("");
  console.log(arr);

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].replace("!", "");
    console.log(arr[i].replace("!", ""));
  }

  return arr.join("");
}

console.log(removeExclamationMarks("!Hello! World!"));
