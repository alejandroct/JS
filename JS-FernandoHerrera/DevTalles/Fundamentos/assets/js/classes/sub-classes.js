


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


class Heroe extends Persona {
    clan = 'Sin clan';

    constructor(nombre,codigo,frase){
        //como es una clase que heredo de otra, cuando creo su propio constructor
        //debo llamar el constructor del padre tbn , esto se hace invocando el metodo super(); dentro del constructor
        super(nombre,codigo,frase);
        //para usar el this en este cosntructor siempre primero debo llamar al constructor padre con el metodo super();
        this.clan = 'Los Avengers!';
        
    }
    //sobre escritura de  metodos
    quiensoy(){
        //como tengo el mismo metodo de la clase pedro , puedo llamarlo tbn usando super.quiensoy()
        //el termino super solo puede ser usado dentro de un constructor o funcion
        super.quiensoy();
        console.log(`Soy ${this.nombre} y mi identidad es: ${this.codigo}------`);
    };
    
}

const spiderman = new Heroe('Peter Parker','Spiderman','Soy tu vecino');

spiderman.quiensoy();
