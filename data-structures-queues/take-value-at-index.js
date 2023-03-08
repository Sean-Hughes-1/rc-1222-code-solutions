/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  if (queue.peek() !== undefined) {
    for (let i = 0; i < index; i++) {
      const move = queue.dequeue();
      queue.enqueue(move);
    }
    return queue.dequeue();
  }
  return undefined;
}
