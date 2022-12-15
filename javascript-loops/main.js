/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */
function getNumbersToTen() {
  var numbers = [];
  var currentNumber = 1;
  var i = 0;
  while (i < 10) {
    numbers.push(currentNumber);
    currentNumber++;
    i++;
  }
  return numbers;
}
function getEvenNumbersToTwenty() {
  var evenNumbers = [];
  var currentNumber = 2;
  var i = 0;
  while (i < 10) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
    i++;
  }
  return evenNumbers;
}
function repeatWord(word, times) {
  var count = 1;
  var repeated = '';
  while (count < times) {
    repeated += word;
    count++;
  }
  return repeated;
}
function logEachCharacter(string) {
  for (let i = 0; i < string.length; i++) {
    console.log(string.charAt(i));
  }
}
function doubleAll(numbers) {
  var doubled = [];
  for (let i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled;
}
function getKeys(object) {
  var keys = [];
  for (const key in object) {
    keys.push(key);
  }
  return keys;
}
function getValues(object) {
  var values = [];
  for (const x in object) {
    values.push(object[x]);
  }
  return values;
}
