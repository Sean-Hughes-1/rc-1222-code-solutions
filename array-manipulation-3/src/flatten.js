/* exported flatten */
function flatten(array) {
  const flat = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (let j = 0; j < array[i].length; j++) {
        flat.push(array[i][j]);
      }
    } else {
      flat.push(array[i]);
    }
  }
  return flat;
}
