const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log('sum: ', sum);
const product = numbers.reduce((a, b) => a * b);
console.log('product: ', product);
const balance = account.reduce((acc, transaction) => {
  if (transaction.type === 'deposit') {
    acc += transaction.amount;
  } else if (transaction.type === 'withdrawal') {
    acc -= transaction.amount;
  }
  return acc;
}, 0);
console.log('balance: ', balance);
const composite = traits.reduce((accumulator, currentValue) => Object.assign(accumulator, currentValue));
console.log('composite: ', composite);
