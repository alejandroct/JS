


/**
 * Esta función me permite tomar una carta del deck si aun tiene cartas
 * @param {Array<string>} deck Ejemplo: ['1H','2H',...]
 * @returns {string} Retorna una carta del deck
 */
export const getCard = (deck) => {
    if (!deck || deck.length === 0) {
        throw new Error("No hay cartas en el deck");
    }
    return deck.pop();
}