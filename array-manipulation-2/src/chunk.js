/* exported chunk */
function chunk(array, size) {
  var chunks = [];
  for (let i = 0; i < array.length; i = i + size) {
    var chunk = [];
    for (let j = 0; j < size; j++) {
      if (i + j >= array.length) break;
      chunk.push(array[i + j]);
    }
    chunks.push(chunk);
  }
  return chunks;
}
