console.log("");
console.log("---------- Event Loop ----------");

/* 
Muchas funciones asincrónicas se ejecutan en un stack diferente. El Event Loop es la herramienta que permite la sincronización 
entre nuestro call stack con estas tareas asincrónicas que funcionan en un thread aparte.
Si el stack está vacío, el Event Loop envía la primera función que esté en la callback queue al call stack y comienza a ejecutarse.
*/

console.log("Inicio del proceso");

const dos = () => {
    setTimeout(() => {
        console.log("Dos");
    }, 0);
}

const uno = () => {
    setTimeout(() => {
        console.log("Uno");
    }, 0);

    dos();

    console.log("Tres");
}

uno();

console.log("Fin del proceso");