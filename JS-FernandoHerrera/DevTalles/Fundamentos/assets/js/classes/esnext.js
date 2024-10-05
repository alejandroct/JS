

//propiedades privadas en clases de js

class Rectangulo {

    //asi es como se definen las propiedades privadas , las cuales no se pueden acceder fuera de la clase
    //lo que aun no hay son metodos privados
    #area = 0;

    constructor(base=0,altura=0){
        this.base   = base;
        this.altura = altura;
        this.#area   = base*altura;

    }
}

//rectangulito.#area = 100;
const rectangulito = new Rectangulo(10,15);

console.log(rectangulito.area);