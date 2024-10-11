

/**
 * Esta funcion evalua quien es el ganador emitiendo alertas en el Dom.
 * @param {Array<number>} puntosJugadores Array de numeros. Contiene el puntaje de los jugadores.
 */
export const determinarGanador = (puntosJugadores) => {
    const [puntosMinimos,puntosComputadora] = puntosJugadores; //destructuring de un array
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
    }, 300);
}