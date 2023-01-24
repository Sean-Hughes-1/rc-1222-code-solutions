const $jokeContainer = document.querySelector('#joke-container');
const $flashImage = document.querySelector('#flash-image');
const $jokeForm = document.querySelector('#joke-form');

const jokester = {
  tellJoke: (setup, punchline) => {
    $jokeForm.classList.add('d-none');
    const $introStatement = jokester.renderJokePhrase('Hey Flash...');
    jokester.appendJokePhrase($introStatement);
    const $jokeSetup = jokester.renderJokePhrase(setup);
    setTimeout(() => {
      jokester.appendJokePhrase($jokeSetup);
      setTimeout(() => {
        const $jokePunchline = jokester.renderJokePhrase(punchline);
        jokester.appendJokePhrase($jokePunchline);
        flash.laugh();
      }, 2000);
    }, 2000);
  },
  renderJokePhrase: phrase => {
    const $phrase = document.createElement('h4');
    $phrase.textContent = phrase;
    $phrase.className = 'fade-in text-center mb-3 col-12';
    return $phrase;
  },
  appendJokePhrase: $phrase => {
    $jokeContainer.append($phrase);
  }
};

const flash = {
  laughingUrl: 'images/flash-laugh.gif',
  laugh: () => {
    setTimeout(() => {
      $flashImage.setAttribute('src', flash.laughingUrl);
    }, 3000);
  }
};

const handleJokeSubmission = event => {
  event.preventDefault();
  const { setup, punchline } = event.target.elements;
  jokester.tellJoke(setup.value, punchline.value);
};

$jokeForm.addEventListener('submit', handleJokeSubmission);
