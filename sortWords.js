sortWords(["banana", "apple", "cherry"]);
// ["apple", "banana", "cherry"]

const result = sortWords(["dog", "elephant", "cat"]);
// ["cat", "dog", "elephant"]

sortWords([]);
// []

function sortWords(words) {
  return words.sort();
}

console.log(result);
