//! Ch4113ng3

// Make your strings more nerdy: Replace all 'a'/'A' with 4, 'e'/'E' with 3 and 'l' with 1 e.g. "Fundamentals" --> "Fund4m3nt41s"

function nerdify(txt) {
  txt = txt.replace(/a|A/g, "4");
  txt = txt.replace(/e|E/g, "3");
  txt = txt.replace(/l/g, "1");
  return txt;
}

console.log(nerdify("Seven")); // S3v3n
console.log(nerdify("Fundamentals")); // Fund4m3nt41s
console.log(nerdify("Seoijselawuue")); // S3oijs314wuu3
