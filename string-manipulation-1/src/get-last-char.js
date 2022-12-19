/* exported getLastChar */
/* create a function that returns the las character in a given string.
function getLastChar(string) {
  count characters in the string and store to a variable called count.
  return the value of the string at the index of the count.
}
*/
function getLastChar(string) {
  var count = 0;
  for (let i = 0; i < string.length; i++) {
    count++;
  }
  return string[count - 1];
}
