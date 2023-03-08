/* exported getFront */

function getFront(queue) {
  if (queue !== undefined) {
    return queue.peek();
  }
  return undefined;
}
