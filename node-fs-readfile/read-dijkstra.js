const fs = require('fs');

fs.readFile('dijkstra.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
