/* exported difference */
function difference(first, second) {
  const arr = [];
  for (let i = 0; i < first.length; i++) {
    if (second.indexOf(first[i]) === -1) {
      arr.push(first[i]);
    }
  }
  for (let j = 0; j < second.length; j++) {
    if (first.indexOf(second[j]) === -1) {
      arr.push(second[j]);
    }
  }
  return arr;
}
