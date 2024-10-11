
import { acumularPuntos,crearCarta,createDeck,getCard,turnoComputadora } from './usecases';

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
    deck = createDeck(types,specials);
    puntosJugadores = [];
    for (let i = 0; i < numJugadores; i++) {
        puntosJugadores.push(0);
    }

    puntosHtml.forEach( elem => elem.innerText = 0 );  
    divCartasJugadores.forEach(elem => elem.innerHTML = '')

    btnPedirCarta.disabled = false;
    btnDetener.disabled = false;
}

// continuando con el desarrollo del juego, eventos de click

btnPedirCarta.addEventListener('click',()=>{
    const carta = getCard(deck);
    const puntosJugador = acumularPuntos(carta, 0,puntosJugadores,puntosHtml);
    crearCarta(carta,0,divCartasJugadores);
      
    if(puntosJugador>21){
        console.warn('Perdiste!');
        btnPedirCarta.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador,deck,puntosJugadores,puntosHtml,divCartasJugadores);   
    } else if(puntosJugador === 21){
        console.warn('Genial 21!');
        btnPedirCarta.disabled = true; 
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador,deck,puntosJugadores,puntosHtml,divCartasJugadores); 
    }

});

btnDetener.addEventListener('click',()=>{
    btnPedirCarta.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugadores[0],deck,puntosJugadores,puntosHtml,divCartasJugadores);
});

btnNuevoJuego.addEventListener('click',()=>{
    inicializarJuego();
});