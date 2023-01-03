/* exported lastChars */
function lastChars(length, string) {
  var output = '';
  if (string.length === 0) {
    return '';
  }
  if (length > string.length) {
    return string;
  }
  for (let i = 0; i < string.length; i++) {
    if (i < string.length - length) {
      continue;
    }
    output += string[i];
  }
  return output;
}
