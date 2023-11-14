console.log("");
console.log("---------- Valores booleanos true o false ----------");

let verdadero = true; 
let falso = false;
console.log(verdadero);
console.log(falso);

console.log("");
console.log("---------- Uso de la estructura if ----------");

// Cuando la condición se cumple
if (verdadero) { 
    console.log("Se cumple la condición");
}

// Cuando la condición no se cumple
if (falso) { 
    console.log("Se cumple la condición");
}

console.log("");
console.log("---------- Operadores de comparación ----------");
// Cuando comparamos dos valores a través de un operador de comparación, ésta operación siempre se resuelve en true o false
// Operadores de comparación - operador de equivalencia ==

let num1 = 10;
let num2 = 10;

console.log(num1 == num2);
console.log(20 == 20);
console.log("Juan" == "juan"); // false 

console.log("");
console.log("---------- Operadores de comparación con condicional if ----------");

if( num1 == num2) {
    console.log("Los números son iguales");
}

console.log("");
console.log("---------- Estructura if else ----------");
/* 
Como vimos anteriormente la estructura if nos permite ejecutar algo en el caso que la condición se cumpla,
pero también existe la posibilidad de ejecutar algo en el caso de que la condición no se cumpla, teniendo 
las dos alternativas para una condición.
*/

// let password = "hola";
// let contrasenia = prompt("Ingrese su contraseña");

// if( password == contrasenia) {
//     // Si se cumple esta condición ejecutamos el código
//     console.log("Usted tiene acceso");
// } else {
//     // En caso que no se cumpla la condición se ejecuta este código
//     console.log("Error de contraseña");
// } 

// if(10 == 20 ) {
//     console.log("Los números son iguales");
// } else {
//     console.log("Los números no son iguales");
// }

// let nombre = "Juan";
// let nombreUsuario = prompt("Ingrese su nombre");

// if(nombre == nombreUsuario) {
//     console.log("Bienvenido " + nombre);
// } else {
//     console.log("Quien sos vos??? anda pallaa");
// }

console.log("");
console.log("---------- Estructura if else if ----------");

/* 
Con la estructura de control if else if, podemos anidar varias condiciones relacionadas y tomar diferentes acciones
de acuerdo a cada caso, si no se cumple ninguna colocamos un else al final que determine la acción en caso de que no
se cumpla ninguna de las condiciones.
 */
// Operador de comparación > <  (Mayor que y Menor que)
let precio = 19;

if( precio < 20 ) {

    console.log("El precio es menor a 20");

} else if (precio < 50) {

    console.log("El precio es menor a 50");
    
} else if (precio < 100) {

    console.log("El precio es menor a 100");

} else {
    console.log("El precio es mayor que 100");
}