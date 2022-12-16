/* exported tail */
/* create a function that returns the values of the array sans the first element

function tail(array) {
  use a for loop with a continue statement to skip the first item in the array
  and push the rest of the array into a new array stored in an output variable.
  return the output variable.
} */
function tail(array) {
  var tail = [];
  for (let i = 0; i < array.length; i++) {
    if (i === 0) {
      continue;
    }
    tail.push(array[i]);
  }
  return tail;
}
