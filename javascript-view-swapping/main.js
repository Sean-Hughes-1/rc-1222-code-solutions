var $tabContainer = document.querySelector('.tab-container');
var $tabElements = document.querySelectorAll('.tab');
var $viewElements = document.querySelectorAll('.view');
$tabContainer.addEventListener('click', handleClick);
function handleClick(event) {
  var eventTarget = event.target.getAttribute('data-view');
  if (event.target.matches('.tab')) {
    for (let i = 0; i < $tabElements.length; i++) {
      if (event.target === $tabElements[i]) {
        $tabElements[i].className = 'tab active';
      } else {
        $tabElements[i].className = 'tab';
      }
    }
  }
  if (event.target.matches('.tab')) {
    for (let j = 0; j < $viewElements.length; j++) {
      if (eventTarget !== $viewElements[j].getAttribute('data-view')) {
        $viewElements[j].className = 'view hidden';
      } else {
        $viewElements[j].className = 'view';
      }
    }
  }
}
