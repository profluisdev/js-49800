console.log("");
console.log("---------- Funciones de orden superior ----------");

/* 
Son funciones que retornan una función, o recibe una función por parámetro. 
Este tipo de funciones nos permiten abstraernos sobre acciones y no sólo valores.
*/

// Funciones que retornan una función 

function mayorQue(numeroReferencia) {
    // Retornamos una función que retorna un valor booleano
    return numero => numero > numeroReferencia;
}

let mayorQueDiez = mayorQue(10);
// let mayorQueDiez = numero => numero > 10

console.log(mayorQueDiez(16)); // 16 > 10
console.log(mayorQueDiez(8)); // 8 > 10

// Recibir funciones por parámetro

let numeros = [1, 2, 3, 4, 5];

numeros.forEach( (numero ) => console.log(numero) );


