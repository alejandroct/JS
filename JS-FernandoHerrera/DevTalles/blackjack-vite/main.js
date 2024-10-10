import _ from 'underscore';

import './style.css'


let deck = [];
const types = ['C','D','H','S'],
      specials = ['A','J','Q','K'];

/* let puntosJugador = 0,
    puntosComputadora = 0; */
let puntosJugadores = [];

//Referencias de HTML
const btnPedirCarta = document.querySelector('#btnPedirCarta'),
      btnNuevoJuego = document.querySelector('#btnNuevoJuego'),
      btnDetener = document.querySelector('#btnDetener');

const puntosHtml = document.querySelectorAll('small'),
      divCartasJugadores = document.querySelectorAll('.divCartas');

const inicializarJuego = ( numJugadores = 2 ) => {
    deck = createDeck();
    puntosJugadores = [];
    for (let i = 0; i < numJugadores; i++) {
        puntosJugadores.push(0);
    }

    puntosHtml.forEach( elem => elem.innerText = 0 );  
    divCartasJugadores.forEach(elem => elem.innerHTML = '')

    btnPedirCarta.disabled = false;
    btnDetener.disabled = false;
}
//Esta funcion crea nueva baraja
const createDeck = () => {
    deck = [];
    for (let i = 2; i < 11; i++) {
        for (const type of types) {
            deck.push(`${i}${type}`);
        }
    }
    for (let special of specials) {
        for (const type of types) {
            deck.push(`${special}${type}`);
        }   
    }
    return _.shuffle(deck);
}
//Esta funcio me permite tomar una carta del deck si aun tiene cartas

const getCard = () => {
    if (deck.length === 0) {
        throw new Error("No hay cartas en el deck");
    }
    return deck.pop();
}
//Funcion para saber el valor de la carta
const valueOfCard = (carta) => {
    const valor = carta.substring(0,carta.length - 1);
    return ( isNaN(valor) ) ? 
            (valor === 'A') ? 11 : 10
            : valor - 0;
    // let puntos = 0;
    // if( isNaN(valor) ){
    //     console.log('No es un numero');
    //     puntos = (valor === 'A') ? 11 : 10;
    // }else{
    //     console.log('Es un numero');
    //     puntos = valor - 0;
    // }
    // return puntos;
}
//Turno:0  = primer jugador y el ultimo sera la computadora
const acumularPuntos = ( carta,turno ) => {
    puntosJugadores[turno] += valueOfCard(carta);
    puntosHtml[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno];
}
const crearCarta = (carta,turno) => {
    const imgCartaNueva = document.createElement('img');
    imgCartaNueva.classList.add('carta');
    imgCartaNueva.src = `assets/cartas/${carta}.png`;
    divCartasJugadores[turno].append(imgCartaNueva);
}
const determinarGanador = () => {
    const [puntosMinimos,puntosComputadora] = puntosJugadores;
    setTimeout(() => {
        if (puntosComputadora === puntosMinimos) {
            alert('Nadie Ganó!')
        } else if (puntosMinimos > 21) {
            alert('La Computadora Gana!')
        }else if (puntosComputadora > 21 ) {
            alert('Jugador Gana!')
        } else if (puntosComputadora > puntosMinimos) {
            alert('Computadora Gana!')
        }
    }, 100);
}


//TURNO DE LA COMPUTADORA

const turnoComputadora = (puntosMinimos) => {
    let puntosComputadora = 0;
    do{
        const carta = getCard();
        puntosComputadora = acumularPuntos(carta,puntosJugadores.length - 1);
        crearCarta(carta,puntosJugadores.length - 1);

    } while( (puntosComputadora < puntosMinimos) && (puntosMinimos<=21) );
    determinarGanador();
}
// continuando con el desarrollo del juego, eventos de click

btnPedirCarta.addEventListener('click',()=>{
    const carta = getCard();
    const puntosJugador = acumularPuntos(carta, 0);
    crearCarta(carta,0);
      
    if(puntosJugador>21){
        console.warn('Perdiste!');
        btnPedirCarta.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador);   
    } else if(puntosJugador === 21){
        console.warn('Genial 21!');
        btnPedirCarta.disabled = true; 
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador); 
    }

});

btnDetener.addEventListener('click',()=>{
    btnPedirCarta.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugadores[0]);
});

btnNuevoJuego.addEventListener('click',()=>{
    inicializarJuego();
});

/* return {
    nuevoJuego: inicializarJuego
} */
