function findLongestWord(string) {
  // Change code below this line
  const stringSplit = string.split(" ");
  let longestWord = "";
  for (const word of stringSplit) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;

  // Change code above this line
}

console.log(findLongestWord("May the force be with you"));
