console.log("");
console.log("---------- Métodos de Arrays ----------");

/* 
En JavaScript, los métodos de array son funciones incorporadas que pueden ser utilizadas con arrays para realizar 
diversas operaciones, como agregar o quitar elementos, filtrar elementos, mapear valores, etc. 
Estos métodos facilitan la manipulación y el trabajo con arrays.
*/

console.log("");
console.log("---------- Métodos unshift y push ----------");

// Con estos métodos podemos agregar elementos a un array

let numeros = [2, 3, 4];
console.log(numeros);

// Agregar un elemento en la primera posición con el método unshift
numeros.unshift(1)
console.log(numeros);

// Agregar un elemento en la ultima posición con el método push
numeros.push(5);
console.log(numeros);

console.log("");
console.log("---------- Métodos shift, pop y splice ----------");
// Con estos métodos podemos quitar elementos de un array

// Quitar elementos en la primera posición del array con el método shift
numeros.shift();
console.log(numeros);

// Quitar elementos en la última posición del array con el método pop
numeros.pop()
console.log(numeros);

// Quitar elementos de un array en cualquier posición con el método splice
// Primer parámetro desde que posición quieres eliminar, Segundo parámetro cuantos elementos quieres eliminar desde la posición
numeros.splice(1,1)
console.log(numeros);

let nombresMasculinos = ["Pepe", "Juan", "Pedro", "Ana", "Maria"];
let nombresFemeninos = ["Pepe", "Juan", "Pedro", "Ana", "Maria"];

nombresMasculinos.splice(3,2);
console.log(nombresMasculinos);

nombresFemeninos.splice(0,3);
console.log(nombresFemeninos);

console.log("");
console.log("---------- Método join ----------");

/* 
Mediante el método join podemos generar un string con todos los elementos del array, separados por el valor 
que pasamos por parámetro
*/

console.log(nombresMasculinos.join("."));
console.log(nombresMasculinos.join(" "));
console.log(nombresMasculinos.join("/"));
console.log(nombresMasculinos.join("*"));
console.log(nombresMasculinos.join(", "));
console.log(nombresMasculinos.join(" | "));
// console.log(nombresMasculinos.join(" Nombre: "));

console.log("");
console.log("---------- Método concat ----------");

// Mediante el método concat podemos combinar dos Arrays en un único Array resultante:

let nombresMasculinosYFemeninos = nombresMasculinos.concat(nombresFemeninos);
console.log(nombresMasculinosYFemeninos);

console.log("");
console.log("---------- Método slice ----------");

/* 
El método slice devuelve una copia de una parte del Array dentro de un nuevo Array, empezando por el inicio 
hasta fin (fin no incluido). El Array original no se modificará.
*/

let nombres = ["Pepe", "Juan", "Ana", "Maria"];

let vamosConAna = nombres.slice(2,3)
console.log(vamosConAna);

let sinPepe = nombres.slice(1,4);
console.log(sinPepe);

console.log("");
console.log("---------- Método indexOf ----------");

/* 
El método indexOf() nos permite obtener el índice de un elemento en un array. Recibe por parámetro el elemento que 
queremos buscar en el array y, en caso de existir, nos retorna su índice. 
Si el elemento no existe nos retornará como valor: -1
*/

console.log(nombres.indexOf("Pepe"));
console.log(nombres.indexOf("Ana"));
console.log(nombres.indexOf("Jose")); // -1 por que no existe
console.log(nombres.indexOf("pepe")); // -1 por que no respeta las mayúsculas y minúsculas 


console.log("");
console.log("---------- Método include ----------");

/* 
Similar al anterior, el método includes me permite saber si un elemento que recibo por parámetro existe o no dentro 
de un array, retornando un valor booleano en caso afirmativo o negativo:
*/
// let nombres = ["Pepe", "Juan", "Ana", "Maria"];

console.log(nombres.includes("Pepe"));
console.log(nombres.includes("Juan"));
console.log(nombres.includes("Julieta"));
console.log(nombres.includes("maria"));
console.log(nombres.includes(2));

console.log("");
console.log("---------- Método reverse ----------");

/* 
Como su nombre lo indica, el método reverse() invierte el orden de los elementos dentro de un array,
modifica el array original
*/

console.log(nombres);
nombres.reverse();
console.log(nombres);

