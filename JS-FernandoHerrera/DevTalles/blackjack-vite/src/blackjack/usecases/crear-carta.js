


/**
 * Esta funcion permite crear la carta visualmente como imagen en el DOM
 * @param {string} carta La carta como string. 
 * @param {number} turno turno como numero. Es el valor del jugador de turno. turno=0 > primer jugador y el ultimo siempre sera la computadora.
 * @param {NodeListOf<Element>} divCartasJugadores  NodeList de elementos div encontrados en el document.
 * @returns {HTMLImageElement} Retorna un HMLImageElement.
 */
export const crearCarta = (carta,turno,divCartasJugadores) => {

    if(!carta) throw  new Error('carta es obligatorio y se debe ingresar como string.');
    if((turno === 0)?false:(!turno)) throw  new Error('turno es obligatorio y se debe ingresar como número. Puede tener el valor de 0.');
    if(!divCartasJugadores || divCartasJugadores === 0) throw new Error ('divCartasJugadores es obligatorio y tiene que ser un NodeList del Document.');
    
    const imgCartaNueva = document.createElement('img');
    imgCartaNueva.classList.add('carta');
    imgCartaNueva.src = `assets/cartas/${carta}.png`;
    divCartasJugadores[turno].append(imgCartaNueva);
    return imgCartaNueva;
}