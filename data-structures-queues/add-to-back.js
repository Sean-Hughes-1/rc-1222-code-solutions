/* exported addToBack */

function addToBack(queue, value) {
  if (queue !== undefined) {
    queue.enqueue(value);
  }
  return undefined;
}
