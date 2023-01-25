const fs = require('fs');
const userInput = process.argv.slice(2).join(' ');
fs.writeFile('note.txt', userInput, err => {
  if (err) throw err;
  console.log('Your note was saved to note.txt');
});
