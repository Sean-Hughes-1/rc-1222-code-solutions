var num1 = 3;
var num2 = 67;
var num3 = 80000;
var maximumValue = Math.max(num1, num2, num3);
console.log('The max value is: ', maximumValue);
var heros = ['superman', 'captain america', 'the greatest american hero', 'batman'];
var randomNumber = Math.random();
randomNumber = randomNumber * heros.length;
var randomIndex = Math.floor(randomNumber);
console.log('Value if randomIndex: ', randomIndex);
var randomHero = heros[randomIndex];
console.log('Value of randomHero: ', randomHero);
var library = [
  {
    title: 'CSS for dummies',
    author: 'Dr. Jeff Stat'
  },
  {
    title: 'Where the Red Fern Grows',
    author: 'Rand Grisham'
  },
  {
    title: 'The Little Red Book of Selling',
    author: 'Jeffory Gitomer'
  }
];
var lastBook = library.pop();
console.log('Value of lastBook: ', lastBook);
var firstBook = library.shift();
console.log('Value of firstBook: ', firstBook);
var js = {
  title: 'JavaScript for Impatient Porgrammers',
  author: 'Dr. Axel Raushmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('Value of library: ', library);
var fullName = 'Sean Hughes';
var firstAndLastName = fullName.split(' ');
console.log('Value of firstAndLastName: ', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('Value of sayMyName: ', sayMyName);
