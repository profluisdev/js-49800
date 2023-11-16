console.log("");
console.log("---------- Ciclo While ----------");

/* 
La estructura while permite crear bucles que se ejecutan cero o más veces, dependiendo de la condición indicada.
El funcionamiento del bucle while se resume en: mientras se cumpla la condición indicada, 
repite las instrucciones incluidas dentro del bucle.
*/

// Algoritmo que solicita una entrada al usuario hasta que ingresa “ESC”

// let entrada = prompt("Ingresa un dato o ESC para salir");

// while( entrada != "ESC" ) { // Mientras esta condición de true va a ejecutarse el ciclo
//   // Mientras se cumple esta condición el ciclo se repite
//   // Se ejecuta mientras el ciclo sigue funcionando
//   console.log(`El usuarios ingreso: ${entrada}`);
//   entrada = prompt("Ingresa un dato o ESC para salir");
// }

// console.log("Fin del ciclo");

// Ejemplo de un login

// toLowerCase() es un método que tienen los string para para convertir todo el texto en minúscula
// toUpperCase() es un método que tienen los string para para convertir todo el texto en mayúscula

let usuario = prompt("Ingrese el nombre de usuario del administrador").toLowerCase();
let password = prompt("Ingrese su contraseña").toUpperCase();

while( usuario != "admin" || password != "ADMIN123" ) {
    alert("Usuario o contraseña no validos");
    usuario = prompt("Ingrese el nombre de usuario del administrador").toLowerCase();
    password = prompt("Ingrese su contraseña").toUpperCase();
}

alert("Bienvenido al programa");
