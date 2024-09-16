const title2 = document.createElement('h2');
title2.innerText = 'Aprendiendo Js para poder usar React!';
const button = document.createElement('button');
button.innerText = 'Click';

//el metodo append() espera un objeto html creado con js como lo hemos hecho
// si quisieramos pasar un texto html desde un string usar el metodo .innerHTML()
document.body.append(title2);
document.body.append(button);

button.addEventListener('click',()=>{
    title2.innerText = 'Actualice el texto con Js puro!';
    alert('Se actualizo el texto del titulo h1');
})