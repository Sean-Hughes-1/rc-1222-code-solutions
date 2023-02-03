const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
];
const evenNumbers = numbers.filter(function (x) {
  return x % 2 === 0;
});
console.log('evenNumbers', evenNumbers);
const overFive = numbers.filter(function (y) {
  return y > 5;
});
console.log('overFive', overFive);
const startWithE = names.filter(function (z) {
  return z[0] === 'E';
});
console.log('startsWithE', startWithE);
const haveD = names.filter(name => name.includes('D') || name.includes('d'));
console.log('haveD', haveD);
