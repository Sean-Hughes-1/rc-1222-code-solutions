/* exported zip */
function zip(first, second) {
  const output = [];
  let chunk = [];
  const array = first > second ? second : first;
  for (let i = 0; i < array.length; i++) {
    chunk.push(first[i]);
    chunk.push(second[i]);
    output.push(chunk);
    chunk = [];
  }
  return output;
}
