console.log("");
console.log("---------- SetTimeOut ----------");

/* 
Es una función que permite realizar acciones asincrónicamente . La función recibe dos parámetros:
Una función de callback y un valor numérico que representa milisegundos
*/

console.log("Inicio del proceso");

const mensaje = () => {
    console.log("Primer mensaje asincrónico");
}

// Usamos la función setTimeOut para ejecutar la función mensaje luego de 3 segundos 
setTimeout( mensaje, 3000 );

// Usamos la función setTimeOut para ejecutar la función callback integrada luego de 5 segundos
setTimeout(() => {
    console.log("Segundo proceso asincrónico");
}, 5000);

console.log("Fin del proceso");