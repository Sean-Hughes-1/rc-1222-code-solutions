/* exported initial */
function initial(array) {
  var initial = [];
  for (let i = 0; i < array.length - 1; i++) {
    initial.push(array[i]);
  }
  return initial;
}
