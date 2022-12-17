/* exported getWords */
function getWords(string) {
  var output = [];
  if (string === '') {
    return output;
  }
  output = string.split(' ');
  return output;
}
