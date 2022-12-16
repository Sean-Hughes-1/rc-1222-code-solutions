/* exported sumAll */
function sumAll(numbers) {
  var sumArray = [];
  var sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    sumArray.push(sum);
  }
  return sum;
}
