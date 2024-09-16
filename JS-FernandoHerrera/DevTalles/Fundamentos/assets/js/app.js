
/*
let a = 10;
let b = 20;
let c = a + b;

let d = 'hola';
let e = 'mundo';

const saludo = d+e;

console.warn(a);
console.info(b);
console.error(c);
console.log({a,b,c});

console.table({a,b,c,d,e});

console.log('hola mundo');
*/

//====================================PRO TIPS SECCION =============================

const crearPersona = (nombre,apellido) => ({nombre,apellido});

const persona = crearPersona('Alejandro','Cabrera');

console.log(persona);

//arguments solo existe en function declarations en arrow functions solo existe ...arguments
function printArguments () {
    console.log(arguments);
}

printArguments('alejandro',2,true);

const printArguments2 = (...arguments) => console.log(arguments);


//destructuring en parametros, bien de un array o de un obj
const printArguments3 = (...arguments) => arguments;

printArguments2('Cinthia',4,false);

//destructuring array

const [nombre2,edad,soltera] = printArguments3('Cinthia',4,false);

//destructuring obj

const {nombre:name,apellido:lastName} = crearPersona('Cinthia','Chira');

///destructuring de argumentos de funciones

const tony = {
    nombre:'Tony Stark',
    codeName: 'Iroman',
    vivo: false,
    edad: 40,
    trajes: ['Mark','Mark V','Hulkbuster'],
};

//forma larga
const imprimeProp = (personaje) => {
    console.log('nombre: ', personaje.nombre);
    console.log('codeName: ', personaje.codeName);
    console.log('vivo: ', personaje.vivo);
    console.log('edad: ', personaje.edad);
    console.log('trajes: ', personaje.trajes);
}

imprimeProp(tony);
//forma corta
// si no envio en el obj la edad, por defecto asigna 15
const imprimePropiedades = ({nombre,codeName,vivo,edad=15,trajes}) => {
    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});


}

imprimePropiedades(tony);


//========================FLUJOS DE CONTROL============================

//POR VALOR Y POR REFERENCIA

//TODOS LOS PRIMITIVOS SE PASAN POR VALOR Y LOS OBJETOS SE PASAN POR REFERENCIA
//ROMPEMOS LA REFERENCIA
//spread operator

        //objetos
let juan = {nombre:'Juan'};
let ana = {...juan};
ana.nombre = 'Ana';

console.log({juan,ana});



const cambiaNombre = ({...persona}) => {
    persona.nombre = 'Tony';
    return persona;
} 

let peter = {nombre:'Peter'};
let tony2 = cambiaNombre(peter);

console.log({peter,tony});

            //Arreglos

const frutas = ['manzana','pera','piña'];
console.time('spread');
const otrasFrutas = [...frutas]; //tbn se puede hacer con el metodo slice de los arreglos
console.timeEnd('spread');

otrasFrutas.push('Mango');

console.table({frutas,otrasFrutas});