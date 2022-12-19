/* exported drop */
/* Create a function that drops the first two elements of an array and outputs
the remaining elements.

function drop(array, count) {
  check if array is empty. If empty return an empty array.
  If not empty use a for loop to iterate through the array.
  check if the index of the loop is less than the count parameter.
  if it is less, continue.
  if index is equal to or greater, push the array at index to a new array
  stored in a variable.
  Return the new array
}
*/
function drop(array, count) {
  var arr = [];
  if (array.length === 0) {
    return arr;
  }
  for (let i = 0; i < array.length; i++) {
    if (i < count) {
      continue;
    }
    arr.push(array[i]);
  }
  return arr;
}
