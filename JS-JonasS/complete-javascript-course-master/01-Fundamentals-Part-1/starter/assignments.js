////////VALUES AND VARIABLES/////////////

let country = "Perú";
let continent = "America del Sur";
let population = 33.72;

console.log( `Soy de ${country}, se encuentra en el continente de ${continent}. Somos ${population} millones de habitantes.`);


///////////DATA TYPES////////////////////

const isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

////////LET CONST AND VAR/////////////////

language = 'Spanish';


console.log(language);


///////CHALLENGE 1 ////////////////////////

/* Write your code below. Good luck! 🙂 */

const massMark = 88;
const heightMark = 1.73;

const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);

console.log(BMIMark,BMIJohn);

const markHigherBMI = BMIMark > BMIJohn;

console.log(markHigherBMI);

//////// TYPE CONVERSION //////////////////
const inputYear = '1991';
console.log(Number(inputYear), inputYear);

console.log(Number('Alejandro'));
console.log(typeof NaN);

console.log(String(23),23);

//////////// TYPE COERCION //////////
console.log('Alejandro y tengo' + 23 + ' años');
console.log('23' - '10');


const scoreDolphins = (96+108+89)/3;
const scoreKoalas = (89+96+108)/3;

console.log(scoreDolphins, scoreKoalas);

if ( scoreDolphins === scoreKoalas ) {
    console.log(`Both win the trophy`);
} else if (scoreDolphins > scoreKoalas ) {
    console.log(`Dolphins win the trophy`);
} else {
    console.log(`Koalas win the trophy`);
}

const day = 1;

switch(day) {
    case 'monday' :
        console.log(`Hoy es ${day}.`);
        break;
    case 'sunday' :
        console.log(`Hoy es domingo`);
        break;
    default :
        console.log(`No es un valor valido.`);
}

const age = 9;

age >= 18 ? console.log(`Puede tomar cerveza`) : console.log(`Puede tomar agua`);

const drink = age >= 18 ? `Vino` : `Agua`;
console.log(drink);

const bill = 430;

/* Write your code below. Good luck! 🙂 */

const tip = bill >= 50 && bill <= 300 ? bill*0.15 : bill*0.20;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill+tip}.`);