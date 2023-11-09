console.log("");
console.log("---------- Entrada y salida de datos ----------");

// Entrada de datos
// prompt() Todos los datos que recibimos por el prompt son de tipo string (texto)

// Siempre el tipo de dato que almacena es de tipo string
let nombre = prompt("Ingrese su nombre"); 

// Salida de dato console.log()
console.log("El nombre ingresado es: " + nombre );

// Salida de datos alert()
alert("El nombre ingresado es: " + nombre );

// Convertir un tipo de dato string a un tipo number enteros para ello vamos a utilizar el método parseInt()
let numero = parseInt( prompt("Ingrese un número") );
console.log("El número ingresado es: ", numero);

// Convertir un tipo de dato string a un tipo number decimales para ello vamos a utilizar el método parseFloat()
numero = parseFloat( prompt("Ingrese un número") );
console.log("El número ingresado es: ", numero);






