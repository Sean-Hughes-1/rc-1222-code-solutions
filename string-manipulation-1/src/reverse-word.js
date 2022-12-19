/* exported reverseWord */
function reverseWord(word) {
  var reversed = '';
  for (let i = 0; i < word.length; i++) {
    reversed = word[i] + reversed;
  }
  return reversed;
}
