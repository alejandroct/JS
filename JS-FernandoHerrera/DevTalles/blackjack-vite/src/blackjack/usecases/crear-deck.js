import _ from 'underscore';

export const createDeck = (tiposDeCarta, tiposEspeciales) => {
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

