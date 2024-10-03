/* 
2C = Two of clubs 
2D = Two of Diamonds
2H = Two of Hearts
2S = Two of Spades
*/

(() => {
    'use strict'
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
        for (let i = 0; i < numJugadores; i++) {
            puntosJugadores.push(0);
        }
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

    //TURNO DE LA COMPUTADORA

    const turnoComputadora = (puntosMinimos) => {
        do{
            const carta = getCard();
            puntosComputadora = acumularPuntos(carta,puntosJugadores.length - 1);
            crearCarta(carta,puntosJugadores.length - 1);
            //smallJugador.textContent = puntosJugador.toString(); // otra manera de hacer lo mismo de la linea de arriba
            /* const imgCartaNueva = document.createElement('img');
            imgCartaNueva.classList.add('carta');
            imgCartaNueva.src = `assets/cartas/${carta}.png`;
            divCartasComputadora.append(imgCartaNueva); */

            if (puntosMinimos >21) {
                break;
            }
        } while( (puntosComputadora < puntosMinimos) && (puntosMinimos<=21) );

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


    //MANEJANDO EL DOM

    //document

    document.querySelector('img'); // trae la primera etiqueta html 'img' que encuentra , el querySelectorAll retorna un arreglo con todas las img que encuentre

    // cada objeto de html podemos acceder a sus propiedades y icluso cambiarlas como por ejemplo .src
    // con el     .innerText , cambio o inserto texto del html , con el .innerHtml inserto una etiqueta html

    document.getElementById('id_clase'); // me retorna el objeto html

    document.querySelector('#para_id_class'); // para buscar el primer elemento por id de clase
    document.querySelector('.clase_name'); //para buscar el primer elemeto por clase


    //crear un nuevo elemento html

    const divBotones = document.querySelector('#divBotones');

    //Metodo para crear un nuevo elemento HTML en el document
    const botonNuevo = document.createElement('button');

    //metodo para insertar un elemento html en algun objeto como el div que contiene los botones
    //divBotones.append(botonNuevo);

    //insertando texto en una etiqueta html
    botonNuevo.innerText = 'Destruir el mundo';

    //cambiando la propiedad , de ambas manerar puedo cambiar el contenido del boton.
    botonNuevo.textContent = 'Boton Nuevo';

    //agregandoles clases 

    botonNuevo.classList.add('btn');
    botonNuevo.classList.add('btn-success');


    //añadiendo un html del tipo input

    const input = document.createElement('input');
    //insertando el input en el body
    //document.body.append( input );
    input.classList.add('form-control');
    input.placeholder = 'hola mundo';


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
        }

    });

    btnDetener.addEventListener('click',()=>{
        btnPedirCarta.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador);
    });

    btnNuevoJuego.addEventListener('click',()=>{
        console.clear();
        inicializarJuego();
        /* deck = [];
        deck = createDeck(); */
        /* puntosComputadora = 0;
        puntosJugador = 0; */
        /* puntosHtml[0].innerText = 0;
        puntosHtml[1].innerText = 0;
        divCartasComputadora.innerHTML = '';
        divCartasJugador.innerHTML = '';
        btnPedirCarta.disabled = false;
        btnDetener.disabled = false; */

    });

})();



