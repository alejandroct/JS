

class Persona {

    //truco para usar el destructuring y crear una nueva instancia

    static porObjeto({persona}){
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

const personita = new Persona('Alejandro','Cabrera','Peru');

personita.getInfo();