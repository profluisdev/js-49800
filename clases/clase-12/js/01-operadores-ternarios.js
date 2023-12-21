console.log("");
console.log("---------- Sugar Syntax ----------");

/*
Es el nombre que se le da a los operadores avanzados que funcionan como simplificaciones
de tareas más complejas.
*/

let numero = 10;

// Aumento de manera tradicional
numero = numero + 1;

console.log(numero);

// Aumento primera simplificación
numero += 1;
console.log(numero);

// Aumento simplificado sugar syntax
numero++;
console.log(numero);

console.log("");
console.log("---------- Operador ternario ----------");

/*
Es una simplificación de la estructura condicional if…else.
Es un condicional que consta sí o sí de tres partes:
1 - La condición.
2 - Caso en que se cumpla.
3 - Caso en que no se cumpla
*/

let edad = 12;

if (edad >= 18) {
  console.log("Es mayor de edad");
} else {
  console.log("Es menor de edad");
}

// Utilizando operador ternario
edad >= 18 ? console.log("Es mayor de edad") : console.log("Es menor de edad");

let resultado = edad >= 18 ? "Es mayor de edad" : "Es menor de edad";
console.log(resultado);

const producto = {
  nombre: "Remera",
  precio: 144,
};

let precio;

if (producto.precio < 200) {
  precio = true;
} else {
  precio = false;
}

console.log(precio);

let precio2 = producto.precio < 200 ? true : false;
console.log(precio2);

// Operador ternario con dos condicionales 
let cliente = {
    nombre: "Pepe",
    edad: 22,
    estatura: 1.6
}

let puedeEntrar = cliente.edad >= 18 && cliente.estatura >= 1.6 ? `El cliente ${cliente.nombre} puede ingresar` : "Anda palla, no puedes ingresar";

console.log(puedeEntrar);

let numero2 = "10";

console.log(isNaN(numero2)); // Verifica si se ingresa números en forma number y en formato string

console.log("");
console.log("---------- Operador And && ----------");

// Es una reducción de un condicional, pero trata de ejecutar (o retornar) algo sólo si la condición es verdadera

let carrito = [];

let carritoEstado = carrito.length === 0 && "El carrito está vacío";

console.log(carritoEstado);

console.log("");
console.log("---------- Operador or || ----------");

/* OR ( || ) es sintácticamente similar al anterior, con la diferencia que consta de dos
operandos y no de una condición explícita: operando1 || operando2.
 */

// Tabla de evaluación de valores Falsy
console.log( 0 || "Falsy")  // Falsy
console.log( 40 || "Falsy")  // 40
console.log( null || "Falsy")  // Falsy
console.log( undefined || "Falsy")  // Falsy
console.log( "Hola Mundo" || "Falsy")  // Hola Mundo
console.log( "" || "Falsy")  // Falsy
console.log( NaN || "Falsy")  // Falsy
console.log( true || "Falsy")  // true
console.log( false || "Falsy")  // Falsy

const stock = 0 || "No hay stock";
console.log(stock);

const usuario = null || "El usuario no existe";
console.log(usuario);

let tareas = JSON.parse(localStorage.getItem("tareas"));
console.log(tareas);

// let carritoCompras = JSON.parse(localStorage.getItem("carrito"));
// console.log(carritoCompras);

// if(carritoCompras === null) {
//     carritoCompras = [];
// }


// carritoCompras.push("producto");

// console.log(carritoCompras);

// let productos = ["producto 1", "producto 2"]
// localStorage.setItem("carrito", JSON.stringify(productos));

let carritoCompras = JSON.parse(localStorage.getItem("carrito")) || [];

console.log(carritoCompras);

console.log("");
console.log("---------- Operador Nullish ?? ----------");

/* Este Operador (??) funciona igual que el Operador OR ( || ), con la diferencia que admite más valores como ‘verdaderos’.
En este caso, sólo obtenemos nullish en dos casos: null y undefined */

console.log( 0 ?? "Nullish")  // 0
console.log( 40 ?? "Nullish")  // 40
console.log( null ?? "Nullish")  // Nullish <------
console.log( undefined ?? "Nullish")  // Nullish <------
console.log( "Hola Mundo" ?? "Nullish")  // Hola Mundo
console.log( "" ?? "Nullish")  // ""
console.log( NaN ?? "Nullish")  // NaN
console.log( true ?? "Nullish")  // true
console.log( false ?? "Nullish")  // false

const stock2 = 0 ?? "No hay stock";
console.log(stock2);

