class Persona {

    //SEGUN BUENAS PRACTICAS
    //PRIMERO VAN
    //PROPIEDADES Y METODOS ESTATICOS
    //PROPIEDADES DE LA CLASE
    //CONSTRUCTOR
    //SETS Y GETS
    //METODOS


    //MIENTRAS QUE HAY OTRAS PERONAS QUE SUELEN PONER TODO LO QUE ES PRIVADO AL FINAL DE LA CLASE

    static _conteo = 0;
    static get conteoMsj(){
        return `${Persona._conteo} instancias.`;
    }

    static mensaje(){
        console.log(this.nombre);
        console.log('Hola a todos soy un metodo estatico');
        return 'Hola soy el return del metodo estatico de Persona'
    }


    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    constructor(nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin Frase') {
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
        Persona._conteo ++;
    }

    quiensoy(){
        console.log(`Soy ${this.nombre} y mi identidad es: ${this.codigo}.`);
    }
    miFrase(){
        console.log(`${this.codigo} dice: ${this.frase}.`);
    }

    set setComidaFavorita(comida){
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita(){
        return `La comida favorita de ${this.nombre} es ${this.comida}`;
    }
}


const spiderman = new Persona('Peter Parker','Spiderman','Soy tu amigable vecino Spiderman');


spiderman.quiensoy();
spiderman.miFrase();
spiderman.setComidaFavorita = 'El pastel de cereza de la tia may!';

console.log(spiderman.getComidaFavorita);


console.log(spiderman);
console.log(Persona._conteo);
console.log(Persona.conteoMsj); 
console.log(Persona.mensaje());