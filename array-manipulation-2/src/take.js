/* exported take */
/* Create a function that accepts two arguments, an array and an integer ( count)
which returns the first colunt of the elements of the array. e.g.
take(['foo', 'bar','baz','qux'], 2) returns ["foo", "bar"]

function(array, count) {
 check for empty array, if empty return empty array if not empty
 use a for loop to iterate based on the count parameter
 push values at index of the loop to the new array
 return the value of the new array.
}
*/
function take(array, count) {
  var arr = [];
  if (array.length === 0) {
    return arr;
  }
  for (let i = 0; i < count; i++) {
    arr.push(array[i]);
  }
  return arr;
}
