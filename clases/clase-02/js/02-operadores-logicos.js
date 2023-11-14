console.log("");
console.log("---------- Operadores lógicos ----------");

/* 
Operador lógico: Los operadores lógicos en JavaScript son símbolos especiales que se utilizan 
para realizar operaciones lógicas entre valores booleanos (verdadero o falso). Estos operadores 
permiten combinar o comparar expresiones booleanas y determinar la verdad o falsedad de una 
declaración compuesta.
*/

let compararNumeros; 
let compararTextoNumero; 

// Operador == "Es igual"
compararNumeros = 10 == 20;
// Backticks `` altgr + ] 
console.log(`El resultado de 10 == 20 es: ${compararNumeros}`);

compararNumeros = 10 == 10;
console.log(`El resultado de 10 == 10 es: ${compararNumeros}`);

compararTextoNumero = 10 == "10"; // Solo compara el valor y no el tipo de dato
console.log(`El resultado de 10 == "10" es: ${compararTextoNumero}`);

// Operador === "Es estrictamente igual"
compararTextoNumero = 10 === "10"; // Compara el valor y el tipo de dato
console.log(`El resultado de 10 === "10" es: ${compararTextoNumero}`);

// Operador != "Es distinto"
compararNumeros = 10 != 20;
console.log(`El resultado de 10 != 20 es: ${compararNumeros}`);

compararTextoNumero = 10 != "10"; // Solo compara el valor y no el tipo de dato
console.log(`El resultado de 10 != "10" es: ${compararTextoNumero}`);

// Operador !== "Es estrictamente distinto"
compararTextoNumero = 10 !== "10"; // Compara el valor y el tipo de dato
console.log(`El resultado de 10 !== "10" es: ${compararTextoNumero}`);

// Operador > Mayor
compararNumeros = 10 > 20;
console.log(`El resultado de 10 > 20 es: ${compararNumeros}`);

compararNumeros = 20 < 20;
console.log(`El resultado de 20 < 20 es: ${compararNumeros}`);

// Operador <= Menor o Igual
compararNumeros = 20 <= 20;
console.log(`El resultado de 20 <= 20 es: ${compararNumeros}`);

// Operador >= Mayor o Igual
compararNumeros = 10 >= 20;
console.log(`El resultado de 10 >= 20 es: ${compararNumeros}`);

compararNumeros = 20 >= 20;
console.log(`El resultado de 20 >= 20 es: ${compararNumeros}`);

console.log("");
console.log("---------- Operadores lógicos && and (y) ----------");

/* 
El operador and "&&" se utiliza para evaluar dos expresiones booleanas y devuelve "true" si ambas expresiones 
son verdaderas. Si al menos una de las expresiones es falsa, el resultado será "false".
*/

let resultado; 

resultado = 10 > 20 && 10 !== 20; // false && true
console.log(`El resultado de 10 > 20 && 10 !== 20 es: ${resultado}`);

resultado = 10 < 20 && 10 !== 20; // true && true
console.log(`El resultado de 10 < 20 && 10 !== 20 es: ${resultado}`); 

console.log("");
console.log("---------- Operadores lógicos || or (o) ----------");

/* 
El operador or "||" se utiliza para evaluar dos expresiones booleanas y devuelve "true" si al menos una de las 
expresiones es verdadera. Solo devuelve "false" si ambas expresiones son falsas.
*/

resultado = 10 > 20 || 10 !== 20; // false || true
console.log(`El resultado de 10 > 20 || 10 !== 20 es: ${resultado}`);

resultado = 10 < 20 || 10 !== 20; // true || true
console.log(`El resultado de 10 < 20 || 10 !== 20 es: ${resultado}`);

resultado = 10 > 20 || 10 === 20; // false || false
console.log(`El resultado de 10 > 20 || 10 === 20 es: ${resultado}`);

console.log("");
console.log("---------- Operador ! not (no) ----------");
// El operador not "!" se utiliza para negar una expresión booleana, es decir, cambia "true" a "false" y viceversa.

let valor = true; 
console.log(`La variable valor es: ${valor}`);

console.log(`La variable valor es: ${!valor}`);
let comparacion = true;

if(!comparacion && 10 != 10) {
    console.log("Es true");
} else {
    console.log("Es false");
}


/* 
Realizar una aplicación que pueda controlar el acceso a una montaña rusa, que controle la edad y la estatura mínima
para poder ingresar a la atracción, para ello debemos utilizar los siguientes datos:
- Edad del cliente. User parseInt() 
- Estatura del cliente. Usar parseFloat() 
- Edad mínima para ingresar 15 años.
- Estatura mínima para ingresar 1.55
Para resolver este problema debemos utilizar la estructura de control if else if y operadores lógicos
Casos posibles: 
- La edad y la estatura cumplen con los mínimos requisitos o más y puede ingresar.
- La edad cumple con los requisitos mínimos, pero la estatura no, no puede ingresar.
- La edad no cumple con los requisitos mínimos, pero la estatura si, no puede ingresar.
- Ni la edad ni la estatura cumplen con los requisitos mínimos, no puede ingresar 
*/

