function ExampleConstructor() {}
console.log('value of prototype', ExampleConstructor.prototype);
console.log('typeof ExampleConstructor: ', typeof ExampleConstructor);
var constructor = new ExampleConstructor();
console.log('constructor variable: ', constructor);
var instanceOf = constructor instanceof ExampleConstructor;
console.log('instanceof: ', instanceOf);
