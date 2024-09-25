/* 
2C = Two of clubs 
2D = Two of Diamonds
2H = Two of Hearts
2S = Two of Spades
*/

let deck = [];
const types = ['C','D','H','S'];
const specials = ['A','J','Q','K'];

//Esta funcion crea nueva baraja
const createDeck = () => {
    for (let i = 2; i < 11; i++) {
        for (const type of types) {
            deck.push(`${i}${type}`);
        }
    }
    for (const special of specials) {
        for (const type of types) {
            deck.push(`${special}${type}`);
        }   
    }
    // console.log(deck);
    deck = _.shuffle(deck);
    console.log(deck);
    return deck;
}

createDeck();


//Esta funcio me permite tomar una carta

const getCard = () => {

    if (deck.length === 0) {
        throw new Error("No hay cartas en el deck");
        
        
    }

    const carta = deck.pop();
    console.log(deck);
    return carta;
}

// console.log(getCard()); 



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

console.log(valueOfCard('KC'));


