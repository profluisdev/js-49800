console.log("");
console.log("---------- El Objeto Math ----------");

/* 
Javascript provee el objeto Math que funciona como un contenedor de herramientas y métodos para 
realizar operaciones matemáticas.
El objeto Math contiene una serie de métodos que nos permiten realizar algunas operaciones matemáticas más complejas.
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math
*/

console.log(Math);

console.log(Math.E);
console.log(Math.PI);

// Min & Max
// Calcula el número máximo de los enviados por parámetros
console.log(Math.max(20, 40, 33, 50, -3, 34));

// Calcula el número mínimo de los enviados por parámetros
console.log(Math.min(20, 40, 33, 50, -3, 34));

const numeros = [15, 23, 33, 56, 21, 34, 29];

console.log(...numeros);
/* 
Los ... es una operador de propagación lo que hace es descomponer el array 
en sus elementos individuales
*/

console.log(Math.max(...numeros));
// console.log(Math.max(15, 23, 33, 56, 21, 34, 29));
console.log(Math.min(...numeros));

// Ceil, Floor & Round

const pi = Math.PI

// CEIL: devuelve el entero mayor o igual más próximo
console.log(Math.ceil(pi));

// FLOOR: devuelve el entero más cercano redondeado hacia abajo
console.log(Math.floor(pi));

// ROUND: retorna el valor de un número redondeado al entero más cercano si es por ejemplo 3.5 redondea hacia arriba
console.log(Math.round(pi));

// Square Root
// Retorna la raíz cuadrada de un número, si le pasa un número negativo devuelve NaN
console.log(Math.sqrt(9));
console.log(Math.sqrt(25));
console.log(Math.sqrt(10));
console.log(Math.sqrt(-2));

// Random
// El método Math.random() genera un número pseudo-aleatorio entre 0 y 1, siendo el 0 límite inclusivo y el 1 exclusivo.

console.log(Math.random());

// Números aleatorios con rango deseado

// números entre 0 y 10
console.log(Math.random() * 10);

// números entre 20 y 50
console.log( Math.random() * 30 + 20 )
// 30 es el número de rango de números que tiene y el 20 es el límite inferior
// entonces a partir el número 20 tiene un rango de 30 números para elegir

console.log( Math.random() * 30 + 40 )

// Redondeamos números entre el 1 y 10
console.log("--------- Numero del 1 al 10 --------");

// ROUND: retorna el valor de un número redondeado al entero más cercano si es por ejemplo 3.5 redondea hacia arriba
console.log( Math.round( Math.random() * 9 + 1 ) );




