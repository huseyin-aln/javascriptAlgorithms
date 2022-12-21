//! Convert PascalCase string into snake_case

// Complete the function/method so that it takes a PascalCase string and returns the string in snake_case notation. Lowercase characters can be numbers. If the method gets a number as input, it should return a string.

function pascalCaseConverter(string) {
  return (
    string.slice(0, 1).toLowerCase() +
    string
      .split("")
      .slice(1)
      .map((char) => {
        if (char == char.toUpperCase()) return "_" + char.toLowerCase();
        else return char;
      })
      .join("")
  );
}

console.log(pascalCaseConverter("TestController"));
console.log(pascalCaseConverter("MoviesAndBooks"));
