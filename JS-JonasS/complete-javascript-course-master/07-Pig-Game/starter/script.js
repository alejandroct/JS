'use strict';

const dice = document.querySelector('.dice');
const random6 = () => Math.trunc(Math.random() * 6 + 1);
const changeImageRoll = n => {
  if (n >= 1 && n < 7) {
    dice.src = `./dice-${n}.png`;
  } else {
    throw Error(
      'El número debe ser entre 1 y 6 para poder cambiar la imagen del dado'
    );
  }
};

const buttomRollDice = document.querySelector('.btn--roll');
const buttonNewGame = document.querySelector('.btn--new');
const buttonHold = document.querySelector('.btn--hold');
const scorePlayer0 = document.querySelector('#score--0');
const scorePlayer1 = document.getElementById('score--1');
const currentPlayer0 = document.getElementById('current--0');
const currentPlayer1 = document.getElementById('current--1');

//componente que envuelve al player para poder cambiar cual esta activo
const displayPlayer0 = document.querySelector('.player--0');
const displayPlayer1 = document.querySelector('.player--1');

let scores, current, playerActive, playing;

const init = () => {
  scores = [0, 0];
  current = 0;
  playerActive = 0;
  playing = true;
  scorePlayer0.textContent = 0;
  scorePlayer1.textContent = 0;
  currentPlayer0.textContent = 0;
  currentPlayer1.textContent = 0;

  dice.classList.add('hidden');
  displayPlayer0.classList.remove('player--winner');
  displayPlayer1.classList.remove('player--winner');
  displayPlayer0.classList.add('player--active');
  displayPlayer1.classList.remove('player--active');
};

init();

const changePlayerActive = () => {
  document.getElementById(`current--${playerActive}`).textContent = 0;
  current = 0;
  playerActive = playerActive === 0 ? 1 : 0;
  displayPlayer0.classList.toggle('player--active');
  displayPlayer1.classList.toggle('player--active');
};

buttomRollDice.addEventListener('click', () => {
  if (playing) {
    let puntuacion = random6();
    console.log(puntuacion);
    dice.classList.remove('hidden');
    changeImageRoll(puntuacion);
    if (puntuacion !== 1) {
      current += puntuacion;
      document.querySelector(`#current--${playerActive}`).textContent = current;
    } else {
      changePlayerActive();
    }
  }
});

buttonNewGame.addEventListener('click', init);

buttonHold.addEventListener('click', () => {
  if (playing) {
    scores[playerActive] += current;
    document.querySelector(`#score--${playerActive}`).textContent =
      scores[playerActive];
    if (scores[playerActive] >= 100) {
      playing = false;
      dice.classList.add('hidden');
      document
        .querySelector(`.player--${playerActive}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${playerActive}`)
        .classList.remove('player--active');
    } else {
      changePlayerActive();
    }
  }
});
