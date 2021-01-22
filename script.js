'use strict';

function random_num() {
  return Math.trunc(Math.random() * 20) + 1;
}

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

function changeScore(score) {
  document.querySelector('.score').textContent = score;
}

let secretNumber = random_num(); //Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess || guess <= 0 || guess > 20) {
    displayMessage('Number Invalid!');
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(`Too ${guess > secretNumber ? 'High' : 'Low'}!`);
      score--;
      changeScore(score);
    } else {
      displayMessage('You lost the game!');
      changeScore(0);
      document.querySelector('body').style.backgroundColor = 'red';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  let el = document.querySelector('.number');
  el.style.width = '15rem';
  el.textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  displayMessage('Start guessing...');
  secretNumber = random_num();
  score = 20;
  changeScore(20);
});
