/* exported equal */
function equal(first, second) {
  let boolean;
  if (first.length !== second.length) {
    return false;
  }
  if (first.length === 0 && second.length === 0) {
    return true;
  }
  for (let i = 0; i < first.length; i++) {
    if (first[i] === second[i]) {
      boolean = true;
    } else {
      return false;
    }
  }
  return boolean;
}
