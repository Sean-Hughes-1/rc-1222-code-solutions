/* exported ransomCase */
function ransomCase(string) {
  var output = '';
  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      output += string[i].toLowerCase();
    } else {
      output += string[i].toUpperCase();
    }
  }
  return output;
}
