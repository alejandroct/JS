import _ from 'underscore';


//USANDO JS DOC

/**
 * Esta función crea un nuevo deck
 * @param {Array<String>} tiposDeCarta Ejemplo: ['C','D','H','S']
 * @param {Array<String>} tiposEspeciales Ejemplo: ['A','J','Q','K']
 * @returns {Array<String>} Retorna un nuevo deck de cartas
 */
export const createDeck = (tiposDeCarta, tiposEspeciales) => {

    if(!tiposDeCarta || tiposDeCarta === 0) throw new Error ('tiposDeCarta es obligatorio y tiene que ser un arreglo de String.');
    if(!tiposEspeciales || tiposEspeciales === 0) throw new Error ('tiposEspeciales es obligatorio y tiene que ser un arreglo de String.');
    
    let deck = [];
    for (let i = 2; i < 11; i++) {
        for (const type of tiposDeCarta) {
            deck.push(`${i}${type}`);
        }
    }
    for (let special of tiposEspeciales) {
        for (const type of tiposDeCarta) {
            deck.push(`${special}${type}`);
        }   
    }
    return _.shuffle(deck);
}

//export default createDeck;
