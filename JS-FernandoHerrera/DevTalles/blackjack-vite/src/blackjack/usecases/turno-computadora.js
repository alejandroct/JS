import { getCard } from "./get-card";
import {acumularPuntos} from "./acumular-puntos";
import { crearCarta } from "./crear-carta";
import {determinarGanador} from "./determinar-ganador";


//TURNO DE LA COMPUTADORA

/**
 * Esta funcion ejecuta el turno de la computadora , desde obtener cartas del deck, mostrar las  cartas de la computadora y determinar el ganador.
 * @param {number} puntosMinimos Puntos minimos que la computadora necesita para ganar.
 * @param {Array<string>} deck Array de cartas como strings.
 * @param {Array<number>} puntosJugadores Array de numeros. Contiene el puntaje de los jugadores.
 * @param {NodeListOf<HTMLElement>} puntosHtml NodeList de elementos Html encontrados en el document.
 * @param {NodeListOf<Element>} divCartasJugadores NodeList de elementos div encontrados en el document.
 */
export const turnoComputadora = (puntosMinimos,deck,puntosJugadores,puntosHtml,divCartasJugadores) => {

    if (!puntosMinimos) throw new Error('puntosMinimos es obligatorio y debe ser un numero.');
    if (!deck) throw new Error('deck es obligatorio y debe ser un Array de strings.');
    if(!puntosJugadores || puntosJugadores === 0) throw new Error ('puntosJugadores es obligatorio y tiene que ser un arreglo de numeros.');
    if(!puntosHtml || puntosHtml === 0) throw new Error ('puntosHtml es obligatorio y tiene que ser un NodeList del Document.');
    if(!divCartasJugadores || divCartasJugadores === 0) throw new Error ('divCartasJugadores es obligatorio y tiene que ser un NodeList del Document.');


    let puntosComputadora = 0;
    do{
        const carta = getCard(deck);
        puntosComputadora = acumularPuntos(carta,puntosJugadores.length - 1,puntosJugadores,puntosHtml);
        crearCarta(carta,puntosJugadores.length - 1,divCartasJugadores);

    } while( (puntosComputadora < puntosMinimos) && (puntosMinimos<=21) );
    determinarGanador(puntosJugadores);
}