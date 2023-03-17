/* exported reverseWords */
function reverseWords(string) {
  const words = string.split(' ');
  const reversedWords = words.map(word => {
    return word.split('').reverse().join('');
  });
  return reversedWords.join(' ');
}
