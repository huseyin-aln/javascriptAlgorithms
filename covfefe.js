//! Covfefe

// Your are given a string. You must replace any occurence of the sequence coverage by covfefe, however, if you don't find the word coverage in the string, you must add covfefe at the end of the string with a leading space.

function covfefe(str) {
  const result = str.replace(/coverage/g, "covfefe");
  return result === str ? str + " covfefe" : result;
}

console.log(covfefe("coverage")); // covfefe
console.log(covfefe("coverage coverage")); // covfefe covfefe
console.log(covfefe("nothing")); // nothing covfefe
