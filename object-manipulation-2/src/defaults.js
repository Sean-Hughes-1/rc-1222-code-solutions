/* exported defaults */
/*
a for in loop that iterates over the properties of the source object. For each property,
it checks whether the target object has a property with the same key using the
in operator. If it does not, it adds the key-value pair from the source object
to the target object.
*/
function defaults(target, source) {
  for (const key in source) {
    if (!(key in target)) {
      target[key] = source[key];
    }
  }
}
