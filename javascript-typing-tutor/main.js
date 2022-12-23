var container = document.querySelector('.container');
var $span = document.querySelectorAll('span');
var correctTableCell = document.querySelector('#correct');
var wrongTableCell = document.querySelector('#wrong');
var accuracyTableCell = document.querySelector('#accuracy');
var count = 0;
var wrongCount = 0;
var correctCount = 0;
var accuracyPercent = 0;
container.addEventListener('keydown', keyDownHandler);
function keyDownHandler(event) {
  if (count >= $span.length) {
    if (confirm('You have succesfully completed the excercise! would you like to try again?')) {
      for (let i = 0; i < $span.length; i++) {
        $span[i].classList.remove('correct');
      }
      count = 0;
      wrongCount = 0;
      correctCount = 0;
      correctTableCell.textContent = '0';
      wrongTableCell.textContent = '0';
      accuracyTableCell.textContent = '0%';
      return;
    } else {
      alert('Thank you for playing! Come back soon!');
    }
  }

  if (count < $span.length) {
    if ((event.key === ' ' && $span[count].innerHTML === '&nbsp;') || event.key === $span[count].innerText) {
      $span[count].className = 'correct';
      correctCount++;
      correctTableCell.textContent = correctCount;
      count++;
    } else {
      $span[count].className = 'wrong';
      wrongCount++;
      wrongTableCell.textContent = wrongCount;
    }
    accuracyPercent = correctCount / (correctCount + wrongCount) * 100;
    accuracyTableCell.textContent = accuracyPercent.toFixed(2) + '%';
  }
}
