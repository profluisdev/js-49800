console.log("");
console.log("---------- Método sort ----------");

/* 
El método sort en JavaScript se utiliza para ordenar los elementos de un array. 
Por defecto, el método sort convierte los elementos del array a cadenas de texto y realiza la clasificación 
basada en los puntos de código Unicode de esos caracteres.
*/

// Ejemplo de como retornar un valor booleano en una comparación de orden alfabético

console.log("a" > "b");
console.log("Jose" > "Pedro");

const frutas = ["Manzana", "Banana", "Pera", "Frutilla"];
console.log(frutas.sort());

const numeros = [40, 1, 5, 200];

// Ordenamos de manera ascendente
numeros.sort((a, b) => a - b);
console.log(numeros);

// Ordenamos de manera descendente
numeros.sort((a, b) => b - a);
console.log(numeros);