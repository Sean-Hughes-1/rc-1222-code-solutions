const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');
const num1 = Number(process.argv[2]);
const operator = process.argv[3];
const num2 = Number(process.argv[4]);
var result = 0;
switch (operator) {
  case 'plus':
    result = add(num1, num2);
    console.log('result: ', result);
    break;
  case 'minus':
    result = subtract(num1, num2);
    console.log('result: ', result);
    break;
  case 'times':
    result = multiply(num1, num2);
    console.log('result: ', result);
    break;
  case 'over':
    result = divide(num1, num2);
    console.log('result: ', result);
    break;
  default:
    console.log('Invalid Operation. Valid operators: plus, minus, times, over');
}
