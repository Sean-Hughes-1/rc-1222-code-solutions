/* exported isPalindromic */
function isPalindromic(string) {
  let noSpacesString = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      noSpacesString += string[i];
    }
  }
  const lowerCase = noSpacesString.toLowerCase();
  const reversed = lowerCase.split('').reverse().join('');
  if (lowerCase === reversed) {
    return true;
  }
  return false;
}
