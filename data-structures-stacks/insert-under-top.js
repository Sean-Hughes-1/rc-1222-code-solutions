/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  if (stack.peek() !== undefined) {
    const FirstPringle = stack.pop();
    stack.push(value);
    stack.push(FirstPringle);
  }
}
