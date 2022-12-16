/* exported filterOutNulls */
function filterOutNulls(values) {
  var filter = [];
  for (let i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      filter.push(values[i]);
    }
  }
  return filter;
}
