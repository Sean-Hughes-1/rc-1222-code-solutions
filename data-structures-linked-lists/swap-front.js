/* exported swapFront */

function swapFront(list) {
  if (list.next === null) {
    return list;
  }
  const next = list.next;
  const nextNext = list.next.next;
  next.next = list;
  list.next = nextNext;
  return next;
}
