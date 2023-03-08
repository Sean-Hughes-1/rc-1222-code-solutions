/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  if (queue.peek() === undefined) {
    return undefined;
  } else {
    let pop = queue.dequeue();
    let peek = queue.peek();
    if (peek === undefined) {
      return pop;
    }
    while (pop > peek) {
      queue.enqueue(pop);
      pop = queue.dequeue();
      peek = queue.peek();
    }
    return pop;
  }
}
