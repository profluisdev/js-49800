console.log("");
console.log("---------- Ciclo Do While ----------");

/* 
La estructura do...while permite crear bucles que se ejecutan una o más veces, dependiendo de la condición indicada.
A diferencia de while, garantiza que el bloque de código se interpreta al menos una vez, 
porque la condición se evalúa al final.
*/

let nombre = "Juan";

// while( nombre != "Juan") {
//     console.log("Hola Juan");
// }


do {
    console.log("Hola Juan");

} while( nombre != "Juan" );

let numero = 0;

do {
    numero = parseInt(prompt("Ingrese un número mayor que 10"));
    
} while (numero <= 10);

console.log(`El número ingresado es: ${numero}`);