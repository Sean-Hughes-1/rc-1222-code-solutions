/* exported isVowel */
function isVowel(char) {
  var charToLowerCase = char.toLowerCase();
  var vowel = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i < vowel.length; i++) {
    if (charToLowerCase === vowel[i]) {
      return true;
    }
  }
  return false;
}
