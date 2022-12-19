/* exported setValue */
/* create a function that takes three arguments, an object, a key and a value
which add a new key and value to the  object
function setValue(object, key, value) {
  add new key value pair to the object
  return the new object
}
*/
function setValue(object, key, value) {
  object[key] = value;
  return object[key];
}
