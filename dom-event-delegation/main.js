var taskList = document.querySelector('.task-list');
taskList.addEventListener('click', handleClick);
function handleClick(event) {
  var button = event.target;
  var listItem = button.parentNode;
  console.log('Event Target: ', event.target);
  console.log('Event Target tagName: ', event.target.tagName);
  if (event.target && event.target.nodeName === 'BUTTON') {
    listItem.remove();
  }
}
