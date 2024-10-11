//

/**
 * Funcion para saber el valor de la carta
 * @param {string} carta La carta como string.
 * @returns {number} Retorna el valor de la carta como numero.
 */
export const valueOfCard = (carta) => {
    if(!carta) throw  new Error('carta es obligatorio y se debe ingresar como string.');
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