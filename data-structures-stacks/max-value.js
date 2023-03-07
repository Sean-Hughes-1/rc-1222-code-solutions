/* exported maxValue */

function maxValue(stack) {
  if (stack.peek() !== undefined) {
    let biggestPringle = stack.peek();
    while (stack.peek() !== undefined) {
      if (stack.peek() > biggestPringle) {
        biggestPringle = stack.peek();
      }
      stack.pop();
    }
    return biggestPringle;
  }
  return -Infinity;
}
