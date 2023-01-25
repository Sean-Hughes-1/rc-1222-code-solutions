const fs = require('fs');
const randomNumber = Math.floor(Math.random() * 100);
fs.writeFile('random.txt', randomNumber, err => {
  if (err) throw err;
  console.log(`The random number ${randomNumber} was saved to random.txt`);
});
