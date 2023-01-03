/* exported omit */
/*
a for loop that iterates over the properties of the source object. For each
property, it checks whether the keys array includes the property's key using the
includes method. If it does not, it adds the key-value pair to the result object.
*/
function omit(source, keys) {
  var result = {};
  for (const key in source) {
    if (!keys.includes(key)) {
      result[key] = source[key];
    }
  }
  return result;
}
