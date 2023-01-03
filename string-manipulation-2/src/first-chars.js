/* exported firstChars */
function firstChars(length, string) {
  var output = '';
  if (string.length === 0) {
    return '';
  }
  if (length > string.length) {
    return string;
  }
  for (let i = 0; i < length; i++) {
    output += string[i];
  }
  return output;
}
