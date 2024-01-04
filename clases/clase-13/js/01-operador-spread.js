console.log("");
console.log("---------- Operador spread con arrays ----------");

/*
Spread ( … ) es una herramienta que nos permite, como su nombre indica, desparramar un array u objeto.
En otras palabras, cambiar la forma en la que presentamos este array u objeto.
*/

let nombres = ["Juan", "Julieta", "Carlos", "Mariela"];

console.log(...nombres);

// Utilizamos el operador spread para hacer una copia de un array
const numeros = [1, 2, 3, 4, 5];
console.log(numeros);

const copiaDeNumeros = [...numeros];
console.log("copiaDeNumeros", copiaDeNumeros);

// Podemos copiar 2 array o más en uno solo

const nombres1 = ["Juan", "Julieta"];
const nombres2 = ["Carlos", "Mariela"];
const todosLosNombres = [...nombres1, ...nombres2];
console.log(todosLosNombres);

const todosLosNombres2 = [...nombres1, ...nombres2, "Ana", "Jose"];
console.log(todosLosNombres2);

console.log("");
console.log("---------- Operador spread con objetos ----------");

let persona = {
    nombre: "Ana",
    edad: 33,
};

console.log(persona);

// Copiamos las propiedades de un objeto dentro de otro
let copiaPersona = {
    ...persona,
};

console.log(copiaPersona);

// Copiamos un objeto y sobre escribimos solo una propiedad (pueden ser varias)

let persona3 = {
    ...persona,
    edad: 34,
};

console.log(persona3);

// Copiamos un objeto con operador spread y le agregamos más propiedades

let persona4 = {
    ...persona,
    apellido: "Diaz",
};

console.log(persona4);

const cambiarEdad = (persona, edad) => {
    const personaActualizada = {
        ...persona,
        edad,
    };

    return personaActualizada;
};

let persona5 = cambiarEdad(persona, 35);

console.log(persona5);

