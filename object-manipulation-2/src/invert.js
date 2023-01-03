/* exported invert */
/*
a for loop that iterates over the properties of the source object. For each
property, it inverts the key-value pair by adding the value as the key and the
key as the value in the result object.
*/
function invert(source) {
  var result = {};
  for (const key in source) {
    result[source[key]] = key;
  }
  return result;
}
