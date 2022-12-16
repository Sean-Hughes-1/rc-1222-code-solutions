/* exported countdown */
function countdown(number) {
  var countdown = [];
  var count = number + 1;
  for (let i = 0; i < count; i++) {
    countdown.push(number);
    number--;
  }
  return countdown;
}
