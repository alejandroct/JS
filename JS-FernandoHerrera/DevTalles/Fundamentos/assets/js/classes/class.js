class Persona {
    nombre = '';
    codigo = '';
    frase = '';

    constructor(nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin Frase') {
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
    }
}


const spiderman = new Persona();
console.log(spiderman);