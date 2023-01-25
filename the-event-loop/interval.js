let count = 3;
const intervalId = setInterval(() => {
  console.log(count);
  count--;
  if (count === 0) {
    console.log('Blast off!');
    clearInterval(intervalId);
  }
}, 1000);
