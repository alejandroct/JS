'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
const createSecretNumber = function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  return secretNumber;
};
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //No hay ingreso de un valor
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No Number!';
    //Cuando el jugador gana
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    //Cuando el jugador ingresa un numero muy alto
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? '📈 Too high!' : '📉 Too Low!';
      score--;
      document.querySelector('.score').textContent = `${score}`;
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = '🤯 You lost the Game!';
    }
  }
});

document.querySelector('.again').addEventListener('click', () => {
  secretNumber = createSecretNumber();
  console.log(secretNumber);
  score = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = `${score}`;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

console.log(score);
