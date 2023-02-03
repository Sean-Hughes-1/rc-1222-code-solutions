const takeAChance = require('./take-a-chance');
const name = 'Sean';
const chance = takeAChance(name);

chance.then(message => console.log(message))
  .catch(error => console.error(error.message));
