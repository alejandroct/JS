import { valueOfCard } from "./valor-carta";


/**
 * 
 * @param {string} carta La carta como string. 
 * @param {number} turno turno como numero. Es el valor del jugador de turno. turno=0 > primer jugador y el ultimo siempre sera la computadora.
 * @param {Array<number>} puntosJugadores Array de numeros. Contiene el puntaje de los jugadores.
 * @param {NodeListOf<HTMLElement>} puntosHtml NodeList de elementos Html encontrados en el document.
 * @returns {number} Retorna el valor de los puntos acumulados del jugador que esta de turno. De igual manera va cambiando el valor en el html. Modifica el Dom.
 */
export const acumularPuntos = ( carta,turno,puntosJugadores,puntosHtml ) => {
    if(!carta) throw  new Error('carta es obligatorio y se debe ingresar como string.');
    if((turno === 0)?false:(!turno)) throw  new Error('turno es obligatorio y se debe ingresar como número. Puede tener el valor de 0.');
    if(!puntosJugadores || puntosJugadores === 0) throw new Error ('puntosJugadores es obligatorio y tiene que ser un arreglo de numeros.');
    if(!puntosHtml || puntosHtml === 0) throw new Error ('puntosHtml es obligatorio y tiene que ser un NodeList del Document.');

    puntosJugadores[turno] += valueOfCard(carta);
    puntosHtml[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno];
}