

class Persona {

    //truco para usar el destructuring y crear una nueva instancia

    static porObjeto({nombre,apellido,pais}){
        return new Persona(nombre,apellido,pais);

    }


    constructor(nombre,apellido,pais){

        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;

    }

    getInfo() {
        console.log(`info: ${this.nombre} - ${this.apellido} - ${this.pais}`);
    }
}

const cinthia = {
    nombre: 'Cinthia',
    apellido: 'Chira',
    pais: 'Peru'
}

const personita = new Persona('Alejandro','Cabrera','Peru');

personita.getInfo();

const personita2 = Persona.porObjeto(cinthia);

personita2.getInfo();