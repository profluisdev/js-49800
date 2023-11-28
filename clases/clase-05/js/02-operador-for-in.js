console.log("");
console.log("---------- Operador in y For...in ----------");

/* 
El operador in devuelve true si la propiedad especificada existe en el objeto. 
Mientras que el bucle for...in permite acceder a todas las propiedades del objeto, 
obteniendo una propiedad por cada iteración.
*/

const persona = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 30,
    calle: "Avenida Falsa 123",
  };

// Recorre el objeto con un ciclo for y la propiedad in, para mostrar las propiedades del objeto
for( let propiedad in persona ) {
    console.log(propiedad);
};


// Recorre el objeto con un ciclo for y la propiedad in, para mostrar los valores del objeto

for(let propiedad in persona) {
    console.log(persona[propiedad]);
    // console.log(persona["nombre"]); 
    // console.log(persona["apellido"]); 
    // console.log(persona["edad"]); 
    // console.log(persona["calle"]); 
}

for(let propiedad in persona) {
    // Mostramos las propiedades y valores juntos
    console.log(`${propiedad}: ${persona[propiedad]}`);
}

