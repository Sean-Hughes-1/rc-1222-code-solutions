var lightbulb = document.getElementById('lightbulb');
var background = document.getElementById('background');
function light() {
  if (lightbulb.className === 'lightbulb lightbulb-on') {
    lightbulb.className = 'lightbulb lightbulb-off';
    background.className = 'container background-off';
  } else {
    lightbulb.className = 'lightbulb lightbulb-on';
    background.className = 'container background-on';
  }
}

lightbulb.addEventListener('click', light);
