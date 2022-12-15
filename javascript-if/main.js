/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */
function isUnderFive(number) {
  return number < 5;
}
function isEven(number) {
  return number % 2 === 0;
}
function startsWithJ(string) {
  return string.charAt(0) === 'j' || string.charAt(0) === 'J';
}
function isOldEnoughToDrink(person) {
  return person.age >= 21;
}
function isOldEnoughToDrive(person) {
  return person.age >= 16;
}
function isOldEnoughToDrinkAndDrive(person) {
  return person.age >= 16 && person.age >= 21;
}
function categorizeAcidity(pH) {
  if (pH > 14 || pH < 0) {
    return 'invalid pH level';
  }
  if (pH === 7) {
    return 'nuetral';
  }
  if (pH === 0 || pH <= 7) {
    return 'acid';
  }
  if (pH >= 7) {
    return 'base';
  }
}
function introduceWarnerBro(name) {
  if (name === 'yakko' || name === 'wako') {
    return 'We are the warner borthers!';
  }
  if (name === 'dot') {
    return 'I\'m cute~';
  }
  if (name !== 'yakko' || name !== 'wakko' || name !== 'dot') {
    return 'Goodnight everybody!';
  }
}
