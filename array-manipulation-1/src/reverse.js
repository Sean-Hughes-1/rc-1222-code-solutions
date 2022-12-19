/* exported reverse */
function reverse(array) {
  var reverse = [];
  for (let i = 0; i < array.length; i++) {
    reverse.unshift(array[i]);
  }
  return reverse;
}
