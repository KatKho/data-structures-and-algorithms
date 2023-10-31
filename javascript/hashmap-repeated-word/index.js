function repeatedWord(str) {
  const wordMap = new Map();
  const words = str.toLowerCase().match(/\w+/g); // Use regex to split words and ignore punctuation

  for (let word of words) {
    if (wordMap.has(word)) {
      return word;
    }
    wordMap.set(word, true);
  }

  return null;
}

module.exports = repeatedWord;
