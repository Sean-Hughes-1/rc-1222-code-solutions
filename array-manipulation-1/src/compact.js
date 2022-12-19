/* exported compact */
function compact(array) {
  var output = [];
  array.forEach(k => {
    if (k) {
      output.push(k);
    }
  });
  return output;
}
