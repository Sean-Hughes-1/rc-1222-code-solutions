var intervalTimer;

function updateHeading() {
  var heading = document.querySelector('h1');
  var countdown = heading.textContent;
  if (countdown === '0') {
    clearInterval(intervalTimer);
    heading.textContent = '~Earth Beeeelooowww Us~';
    return;
  }
  heading.textContent = --countdown;
}
intervalTimer = setInterval(updateHeading, 1000);
