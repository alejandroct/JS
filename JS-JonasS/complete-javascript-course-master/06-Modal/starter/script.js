'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

//seleccionando el boton show modal 1

const btnsOpenModal = document.querySelectorAll('.show-modal');

let pModal = document.querySelector('.modal p').textContent;

const openModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}
// function exitpop() {
//   let my_window = window.open('', 'mywindow1', 'status=1,width=350,height=150');
//   my_window.document.write('<h1>Popup Test!</h1>');
// }

//escuchar el evento de teclado cuando presionamos la tecla escape

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
