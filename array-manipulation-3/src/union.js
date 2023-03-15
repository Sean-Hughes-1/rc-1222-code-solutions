/* exported union */
function union(first, second) {
  const result = [];

  for (let i = 0; i < first.length; i++) {
    const element = first[i];
    if (!result.includes(element)) {
      result.push(element);
    }
  }

  for (let i = 0; i < second.length; i++) {
    const element = second[i];
    if (!result.includes(element)) {
      result.push(element);
    }
  }

  return result;
}
