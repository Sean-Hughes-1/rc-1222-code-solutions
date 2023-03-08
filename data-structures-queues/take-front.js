/* exported takeFront */

function takeFront(queue) {
  if (queue !== undefined) {
    const first = queue.peek();
    queue.dequeue(first);
    return first;
  }
  return undefined;
}
