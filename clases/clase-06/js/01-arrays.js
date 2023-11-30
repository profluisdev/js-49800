console.log("");
console.log("---------- Arrays ----------");

/* 
En los arrays de JavaScript, puedes guardar una amplia variedad de elementos,
pueden ser arrays con un solo tipo de elemento, con distintos tipos de elementos incluso 
un array puede contener otro array anidado
*/

// Array vacío
let array = [];
console.log(array);

// Array de números
let numeros = [1,2,3,4,5,6];
console.log(numeros);

// Array de strings
let nombres = ["Pepe", "Juan", "Ana", "Maria"];
console.log(nombres);

// Array de booleanos
let booleanos = [true, false, true, true];
console.log(booleanos);

// Array de objetos
let personas = [
    { nombre: "Pepe", edad: 20 },
    { nombre: "Juan", edad: 40 },
    { nombre: "Ana", edad: 24 },
  ];

console.log(personas);

// Array mixto
let mix = [10, "Pepe", false, { nombre: "Ana", edad: 24 }];
console.log(mix);

// Array mixto con otro array
let mix2 = [10, "Pepe", false, { nombre: "Ana", edad: 24 }, ["Pepe", "Juan", "Ana", "Maria"]];
console.log(mix2);

console.log("");
console.log("---------- Acceso a elementos de un Array ----------");

console.log(nombres[1]);
console.log(numeros[3]);
console.log(personas[2]);
console.log(personas[2].nombre);

// Uso de los elementos de un array
let suma = numeros[4] + mix[0];
console.log(suma);


console.log("");
console.log("---------- Acceso a elementos de un Array con un ciclo for ----------");
// let numeros = [1,2,3,4,5,6];

// for(let i = 0; i < 6; i++) {
//     console.log(numeros[i]);
//     // console.log(numeros[0]); primer ciclo
//     // console.log(numeros[1]); segundo ciclo
//     // console.log(numeros[2]); tercer ciclo
// }

// Propiedad length: nos permite obtener la longitud de elementos de un array

// console.log(numeros.length);

for(let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}

for(let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
}