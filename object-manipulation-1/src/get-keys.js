/* exported getKeys */
/* create a function that accepts one argument, an object which returns the keys
for that object in an array. If an empty object is passed it should return an
empty array.
function getKeys(object) {
  use a for in loop to loop through the object pushing the keys into a new array
  return the new array.
}
*/
function getKeys(object) {
  var keys = [];
  for (var k in object) keys.push(k);
  return keys;
}
