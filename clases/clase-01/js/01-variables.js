
console.log("");
console.log("---------- Inicializar Variables ----------");
// Tipos de variables var, let y const

// Declarar una variable
let apellido; 
let telefono; 
let anioNacimiento; // camelCase

// Asignarle un valor 
// Los string o cadenas de texto siempre van entre comillas dobles o simples
apellido = "Perez"; // Le asignamos el valor "Perez"
console.log(apellido);

telefono = 3213123;
console.log(telefono);

anioNacimiento = 2000;
console.log(anioNacimiento);

console.log("");
console.log("---------- Variables inicializadas ----------");
// Variables inicializadas

let edad = 20;
let pais = "Argentina";
console.log(edad);
console.log(pais);

console.log("");
console.log("---------- Variables var y let ----------");
//  Las variables let y var pueden recibir múltiples asignaciones,
//  eso quiere decir que puede cambiar su valor muchas veces y su tipo de dato

let fruta = "banana";
console.log(fruta);

fruta = "pera";
console.log(fruta);

fruta = 30;
console.log(fruta);

console.log("");
console.log("---------- Constantes ----------");

// Const, como su nombre lo indica es una constante y no puede cambiar su valor, no puede ser re asignada.

const saludo = "Holaaaaa";
console.log(saludo); 
// saludo = "Adios" NO se puede hacer

console.log("");
console.log("---------- Concatenación ----------");

let nombre = "Juan";
let nombreCompleto = nombre + " " + apellido; 
console.log(nombreCompleto);

let lugarNacimiento = "Nació en el país " + pais;
console.log(lugarNacimiento);

// Concatenar en el console.log()
console.log("Lugar de nacimiento: ", lugarNacimiento);

console.log("");
console.log("---------- Operaciones matemáticas ----------");

let numero1 = 5;
let numero2 = 10;

let resultadoSuma = numero1 + numero2; 
console.log("El resultado de la suma es: " + resultadoSuma);
// console.log("El resultado de la suma es: " , resultadoSuma);

let resultadoResta = numero2 - numero1; 
console.log("El resultado de la resta es: " + resultadoResta);

let resultadoMutiplicacion = numero1 * numero2;
console.log("El resultado de la multiplicación es: " + resultadoMutiplicacion);

let resultadoDivision = numero1 / numero2;
console.log("El resultado de la division es: " + resultadoDivision);

