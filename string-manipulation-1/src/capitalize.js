/* exported capitalize */
/* create a function that takes in one argument, a single word as a string, and
output the word with the first character capitalized

function capitalize(string) {
  select the first character in the word and use the toUpperCase method to
  capitalize it. concatenate with the rest of the word and apply the toLowerCase
  method to ensure only the first letter outputs with a Capital letter.
} */
function capitalize(word) {
  var output = '';
  output = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  return output;
}
