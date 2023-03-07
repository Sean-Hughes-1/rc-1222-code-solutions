/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  if (stack.peek() !== undefined) {
    const firstPringle = stack.pop();
    const secondPringle = stack.peek();

    stack.push(firstPringle);
    return secondPringle;
  }
}
