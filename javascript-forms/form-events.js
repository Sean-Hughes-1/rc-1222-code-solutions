function handleFocus(event) {
  console.log('focus was fired');
  console.log('Event Target Name: ', event.target.name);
}
function handleBlur(event) {
  console.log('blur was fired');
  console.log('Event Target Name: ', event.target.name);
}
function handleInput(event) {
  console.log('Event Target Name: ', event.target.name);
  console.log('Event Target Name: ', event.target.value);
}

var nameInput = document.getElementById('user-name');
var emailInput = document.getElementById('user-email');
var messageInput = document.getElementById('user-message');

nameInput.addEventListener('focus', handleFocus);
nameInput.addEventListener('blur', handleBlur);
nameInput.addEventListener('input', handleInput);
emailInput.addEventListener('focus', handleFocus);
emailInput.addEventListener('blur', handleBlur);
emailInput.addEventListener('input', handleInput);
messageInput.addEventListener('focus', handleFocus);
messageInput.addEventListener('blur', handleBlur);
messageInput.addEventListener('input', handleInput);
