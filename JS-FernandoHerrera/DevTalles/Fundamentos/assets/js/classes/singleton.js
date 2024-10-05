// un singleton es una instacia unica de mi clase
//no importa cuantas veces le haga new , me devuelva esa unica instancia de mi clase con sus propiedades , metodos , etc


//nombre cualquiera de la clase , pero le puse Singleton para que se sepa que es el tema de estudio
class Singleton {

    //2 cosas opcionales para saber que es un singleton
    //se debe inicializar asi dentro de una clase para que funcione como un singleton

    //mas adelante se podra poner como propiedad privada
    //static #instancia;

    static instancia; //undefined //esta sera la instancia inicializada de mi clase que cuando alguien mas intente inciializar mi clase y ya estaba inicializada va  aregresar este valor

    nombre = '';

    constructor(nombre = ''){

        if (!!Singleton.instancia) {
            return Singleton.instancia;
        }
        Singleton.instancia = this;
        this.nombre = nombre;
        //por defecto el contructor ya devuelve la instancia , pero tbn podemos hacerlo explicito
        return this;
    }

}


const instancia1 = new Singleton('Alejandro');

const instancia2 = new Singleton('Cinthia');

console.log(`Nombre de la instancia es: ${instancia1.nombre}`);

console.log(`Nombre de la instancia es: ${instancia2.nombre}`);