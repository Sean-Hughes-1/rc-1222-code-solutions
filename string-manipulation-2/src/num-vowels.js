/* exported numVowels */
function numVowels(string) {
  var vowels = 0;
  var stringtoLowerCase = string.toLowerCase();
  for (let i = 0; i < string.length; i++) {
    if (stringtoLowerCase[i] === 'a' ||
     stringtoLowerCase[i] === 'e' ||
     stringtoLowerCase[i] === 'i' ||
     stringtoLowerCase[i] === 'u' ||
     stringtoLowerCase[i] === 'o') {
      vowels++;
    }
  }
  return vowels;
}
