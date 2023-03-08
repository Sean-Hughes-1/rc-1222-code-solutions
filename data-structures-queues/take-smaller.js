/* exported takeSmaller */

function takeSmaller(queue) {
  const pop = queue.dequeue();
  const second = queue.peek();
  if (pop === undefined) {
    return undefined;
  }
  if (pop !== undefined && second === undefined) {
    return pop;
  }
  if (pop < second) {
    queue.dequeue();
    queue.enqueue(second);
    return pop;
  }
  if (pop === second) {
    queue.dequeue();
    queue.enqueue(second);
    return second;
  }
  if (pop > second) {
    queue.dequeue();
    queue.enqueue(pop);
    return second;
  }
}
