var student = {
  firstName: 'Sean',
  lastName: 'Hughes',
  age: 48
};
var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName: ', fullName);
student.livesInIrvine = false;
student.previousOccupation = 'Chief Operating Officer';
console.log('value of livesInIrvine: ', student.livesInIrvine);
console.log('value of previousOccupation: ', student.previousOccupation);
var vehicle = {
  make: 'Harley Davidson',
  model: 'Road Glide',
  year: '2018'
};
vehicle['color'] = 'black';
vehicle['isConvertable'] = false;
console.log('value of vehicle is: ', vehicle);
var pet = {
  name: 'Ruby',
  type: 'Dog'
};
delete pet.name;
delete pet.type;
console.log('value of pet: ', pet);
