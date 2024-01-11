console.log("");
console.log("---------- Call Stack (pila) ----------");

/* 
Es una lista donde se apilan las distintas tareas a ejecutar por nuestro programa. Javascript es un lenguaje single threaded,
o de un único hilo, lo que significa que tiene un único stack o pila de ejecución. De ahí que la ejecución es implícitamente 
sincrónica.
*/

console.log("Inicio del proceso");

const dos = () => {
    console.log("dos");
};

const uno = () => {
    console.log("Uno");

    dos();

    console.log("Tres");
};

// Ejecutamos la función uno
uno();

console.log("Fin del proceso");
