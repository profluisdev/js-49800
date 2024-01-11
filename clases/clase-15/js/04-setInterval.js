
console.log("");
console.log("---------- setInterval ----------");

/* 
Tiene la misma sintaxis que setTimeout, pero la unidad de tiempo es un intervalo para la repetición de la función asociada.
Permite ejecutar funciones de manera reiterativa tras los milisegundos indicados hasta que indiquemos su detención o se cierre la aplicación 
*/

// setInterval( () => {
//     console.log("Terminar la entrega");
// }, 1000 )


// setInterval( () => {
//     console.log("Transferencia ;) ;)");
// }, 2000 )

console.log("");
console.log("---------- clearInterval ----------");

let contador = 0;

let interval = setInterval(() => {
        contador++
        console.log(`Contado: ${contador}`);
        // Cortamos el proceso del intervalo
        if(contador >= 5) {
            clearInterval(interval);
            console.log("Termino el contador");
        }

}, 1000);

// setInterval(() => {
//     window.location.reload()

// }, 2000);
