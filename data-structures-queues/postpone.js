/* exported postpone */

function postpone(queue) {
  if (queue.peek() !== undefined) {
    const first = queue.dequeue();
    queue.enqueue(first);
  }

}
