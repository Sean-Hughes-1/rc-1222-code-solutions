/* exported intersection */
function intersection(first, second) {
  const result = [];

  for (let i = 0; i < first.length; i++) {
    const element = first[i];
    if (second.includes(element) && !result.includes(element)) {
      result.push(element);
    }
  }

  return result;
}
