/* exported unique */
function unique(array) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    if (output.includes(array[i])) {
      continue;
    } else {
      output.push(array[i]);
    }
  }
  return output;
}
