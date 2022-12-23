/* exported truncate */
/* Create a function that truncates a string by a given number. i.e. a string is
given along with a number. the string should be only as long as the given number
with an elipse added to the end.

function truncate (length, string) {
  create variable to store output
  loop through the string at the length parameter
  within the loop check if the string is empty. if empty return elipse
  check if the length of string is less than the length parameter if true
  return the string concatinated with the elipse
  if none of those conditions are met store the value of the string at index
  to the output variable
  return the out put with elsips added
}
  */

function truncate(length, string) {
  var output = '';
  for (let i = 0; i < length; i++) {
    if (string.length === 0) {
      return '...';
    }
    if (string.length < length) {
      return string + '...';
    }
    output += string[i];
  }
  return output + '...';
}
