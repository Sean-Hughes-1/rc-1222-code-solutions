function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}
console.log('Seconds in 5 minutes: ', convertMinutesToSeconds(5));

function greet(name) {
  return 'Hey, ' + name;
}
console.log('Greeting for Beavis; ', greet('Beavis'));
function getArea(width, height) {
  var area = width * height;
  return area;
}
console.log('The area of 17 width and 42 height is: ', getArea(17, 42));
function getFirstName(person) {
  var firstName = person.firstName;
  return firstName;
}
console.log('The first name of the person object is: ', getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' }));
function getLastElement(array) {
  var lastItemIndex = array.length - 1;
  var lastElement = array[lastItemIndex];
  return lastElement;
}
console.log('The last element in the array is: ', getLastElement(['propane', 'and', 'propane', 'accesories']));
