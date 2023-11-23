console.log("");
console.log("---------- Funciones flecha ----------");
/* 
Las funciones flecha (arrow functions) son una característica introducida en ECMAScript 6 (también conocido como ES6) 
que proporciona una sintaxis más concisa para definir funciones en JavaScript. 
*/

const saludo = () => {
    console.log("Hola desde la arrow function");
}

saludo();

// Funciones flecha con parámetros
const suma = (num1, num2) => {
    console.log(`El resultado de la suma es ${num1 + num2}`);
}

suma(44, 6);

// Funciones flecha con retorno 
const resta = (num1, num2) => {
    return num1 - num2;
}

console.log(`El resultado de la resta es: ${ resta(20, 5) }`);

// Funciones flecha con return implícito
const sumaDeDosNumeros = (num1, num2) => num1 + num2;

console.log(sumaDeDosNumeros(20,30));

// Funciones flechas con un solo parámetro, no necesitan escribir los paréntesis

const saludar = nombre => console.log(`Hola ${nombre}`);

// function saludar(nombre) {
//     return `Hola ${nombre}`;
// }

saludar("Maik")
