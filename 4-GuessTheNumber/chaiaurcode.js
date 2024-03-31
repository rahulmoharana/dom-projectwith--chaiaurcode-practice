const randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const reamaining = document.querySelector('.lastResult');
const lowOrhigh = document.querySelector('#lowOrhi');
const startOver = document.querySelector('resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;
if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('please enter a valid number');
  } else if (guess < 1) {
    alert('please enter a valid number');
  } else if (guess > 100) {
    alert('please enter a less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`game Over,Random number was : ${randomNumber}`);
      EndGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage('your guess is right');
    EndGame();
  } else if (guess < randomNumber) {
    displayMessage(`you guess is too low`);
  } else if (guess > randomNumber) {
    displayMessage(`you guess is too high`);
  }
}
function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess} `;
  numGuess++;
  reamaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrhigh.innerHTML = `<h2>${message}</h2>`;
}

function newGame() {}
function EndGame() {}
