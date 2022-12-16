/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var newWord = [];
  for (let i = 0; i < words.length; i++) {
    newWord.push(words[i] + suffix);
  }
  return newWord;
}
