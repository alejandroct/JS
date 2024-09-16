'use strict';

console.log(document.querySelector('.message').textContent);

//generate random number secret

let secretNumber = Math.trunc(Math.random() * 20 + 1);
console.log(secretNumber);
//inicializando el score y hightscore
let score = 20;
let highScore = 0;
const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.btn.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('⛔ No number!');
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('🎉 Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    console.log('has ganado el juego');
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber && guess < 21 && guess > 0) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '⛔ Too High!' : '⛔ Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('⛔ You lost the game!');
      score = 0;
      document.querySelector('.score').textContent = score;
    }
  } else {
    displayMessage('⛔ Insert a number between 1 and 20!');
    score--;
  }
});

document.querySelector('.again').addEventListener('click', () => {
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  console.log(secretNumber);
});
