/* exported dropRight */
function dropRight(array, count) {
  var arr = [];
  var counter = array.length - count;
  if (count > array.length) {
    return array;
  }
  for (let i = 0; i < array.length; i++) {
    if (i >= counter) {
      continue;
    }
    arr.push(array[i]);
  }
  return arr;
}
