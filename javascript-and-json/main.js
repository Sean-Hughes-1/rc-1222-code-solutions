var library = [
  {
    isbn: '00-1-110',
    title: 'The Joys of Javascript',
    author: 'John Rickenstein'
  },
  {
    isbn: '00-1-111',
    title: 'The Joys of CSS',
    author: 'John Rickenstein'
  },
  {
    isbn: '00-1-112',
    title: 'The Joys of HTML',
    author: 'John Rickenstein'
  }
];
console.log('Library Arrray: ', library, 'typeOf Library Array: ', typeof (library));
var libraryJson = JSON.stringify(library);
console.log('library JSON: ', libraryJson, 'typeof library JSON: ', typeof (libraryJson));
var studentJSON = '{"StudentID": 1, "name": "John Smith"}';
console.log('student JSON: ', studentJSON, 'typeof student: ', typeof (studentJSON));
var studentObject = JSON.parse(studentJSON);
console.log('Parsed Student Object: ', studentObject, 'typeof Student Object', typeof (studentObject));
