/* exported pick */
/*
a for of loop that uses the in operator to check whether the source object has a
property with the current key, and if it does, it checks whether the value of
that property is undefined. If the value is not undefined, it adds the
key-value pair to the result object.
*/
function pick(source, keys) {
  var result = {};
  for (const key of keys) {
    if (key in source && source[key] !== undefined) {
      result[key] = source[key];
    }
  }
  return result;
}
