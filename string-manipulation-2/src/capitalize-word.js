/* exported capitalizeWord */
/*
create a function that returns the given word with the first letter capitalized
and all other letters lowercase
function capitalizeWOrd(word) {
  create variabel to store output
  change entire word to lowercase and store for later use
  check if the lowercase word is javascript - if yes output = 'JavaScript' and
  return the output
  if no, get the first letter of the word and change it to uppercase then
  concatinate that to the lowercase but take off the first letter using substring
  method.
}
*/
function capitalizeWord(word) {
  var output = '';
  var lowercase = word.toLowerCase();
  if (lowercase === 'javascript') {
    output = 'JavaScript';
    return output;
  }
  output = lowercase[0].toUpperCase() + lowercase.substring(1);
  return output;
}
