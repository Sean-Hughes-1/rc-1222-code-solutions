/* exported last */
/* Create a function that take an array as an argument which returns the last
element of that array

function last(array) {
  checks if the array is empty, if it is returns undefined
  count the items in the array subtract one from the total to
  get the last index.
  return the value of the array at the last index
}
*/
function last(array) {
  if (array.length === 0) {
    return undefined;
  }
  return array[array.length - 1];
}
