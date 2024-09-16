'use strict';

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1'); //El id se pasa si # para este metodo de getElementById
const current0El = document.getElementById('current--0');
const current1dEl = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNewEl = document.querySelector('.btn--new');
const btnRollEl = document.querySelector('.btn--roll');
const btnHoldEl = document.querySelector('.btn--hold');

const scores = [0, 0];

let currentScore = 0;
let current0 = 0;
let current1 = 0;
let activePlayer = 0;
let playing = true;

//Numero random de 1 al 6
const random6 = () => {
  let numberRandom = Math.trunc(Math.random() * 6 + 1);
  return numberRandom;
};

const switchNextPlayer = () => {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.toggle('player--active');

  activePlayer = activePlayer === 0 ? 1 : 0;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.toggle('player--active');
};

//Inicio del juego con click en el boton roll

btnRollEl.addEventListener('click', () => {
  if (playing) {
    const dice = random6();
    diceEl.src = `dice-${dice}.png`;
    diceEl.classList.remove('hidden');
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchNextPlayer();
    }
  }
});

btnHoldEl.addEventListener('click', () => {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 30) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceEl.classList.add('hidden');
    } else {
      switchNextPlayer();
    }
  }
});

btnNewEl.addEventListener('click', () => {
  document.querySelector(`.player--0`).classList.remove('player--winner');
  document.querySelector(`.player--1`).classList.remove('player--winner');
  scores[0] = 0;
  scores[1] = 0;

  currentScore = 0;
  current0 = 0;
  current1 = 0;
  activePlayer = 0;
  playing = true;
  score0El.textContent = scores[0];
  score1El.textContent = scores[1];
  document.querySelector(`.player--0`).classList.add('player--active');
  document.querySelector(`.player--1`).classList.remove('player--active');
  diceEl.classList.add('hidden');
  document.getElementById(`current--0`).textContent = currentScore;
  document.getElementById(`current--1`).textContent = currentScore;
  console.log(`btn new ggame`);
});
//Iicio de la UI
score0El.textContent = 0;
score1El.textContent = 0;
