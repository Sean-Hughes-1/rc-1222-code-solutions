/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  let output = '';
  for (let i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      output += string[secondIndex];
    } else if (i === secondIndex) {
      output += string[firstIndex];
    } else {
      output += string[i];
    }
  }
  return output;
}
