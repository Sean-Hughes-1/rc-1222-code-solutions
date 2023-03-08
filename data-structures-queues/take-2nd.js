/* exported take2nd */

function take2nd(queue) {
  const dequeue = queue.dequeue();
  const peek = queue.peek();
  if (queue.peek() !== undefined) {
    queue.enqueue(dequeue);
    queue.dequeue();
    return peek;
  } else if (peek === undefined) {
    return dequeue;
  }
}
