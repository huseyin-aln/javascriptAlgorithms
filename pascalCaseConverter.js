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
