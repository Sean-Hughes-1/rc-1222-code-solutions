function helloThere() {
  var textElement = document.querySelector('.message');
  textElement.textContent = 'Hello There';
}
setTimeout(helloThere, 2000);
