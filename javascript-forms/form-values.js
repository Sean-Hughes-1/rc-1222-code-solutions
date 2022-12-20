var theForm = document.getElementById('contact-form');
function handleFormSubmit(event) {
  event.preventDefault();
  var formData = {
    name: theForm.elements.name.value,
    email: theForm.elements.email.value,
    message: theForm.elements.message.value
  };
  console.log('Form Data: ', formData);
}
theForm.addEventListener('submit', handleFormSubmit);
