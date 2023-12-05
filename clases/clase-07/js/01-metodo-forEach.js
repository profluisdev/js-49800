console.log("");
console.log("---------- Método forEach ----------");

/* 
El método forEach en JavaScript se utiliza para ejecutar una función proporcionada una vez por cada elemento en un array,
en orden. Es una forma de iterar sobre cada elemento de un array y aplicar una operación específica a cada uno de ellos.
*/
let numeros = [1, 2, 3, 4, 5];
console.log(numeros);

// Con función tradicional
numeros.forEach( function(elemento) {
        console.log(elemento);
} )

console.log("--------------------------------");

// Con función flecha
numeros.forEach( numero => console.log(numero));

console.log("--------------------------------");

// Mismo resultado que el for of 
for( let elemento of numeros) {
    console.log(elemento);
}


let nombres = ["Pepe", "Juan", "Pedro", "Ana", "Maria"];

let numeroNombre = 1;

nombres.forEach( nombre => {
    console.log(`${numeroNombre} - ${nombre}`);
    numeroNombre++;
} );

