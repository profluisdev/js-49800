/* 
El objeto Storage (API de almacenamiento web) permite almacenar datos de manera local en el 
navegador sin necesidad de realizar ninguna conexión con el servidor.
De esta manera, cada cliente puede preservar información de la aplicación.
El navegador nos ofrece dos tipos de storage: localStorage y sessionStorage.
*/

// localStorage

/* 
Los datos almacenados en localStorage (variable global preexistente) se almacenan en el navegador 
de forma indefinida (o hasta que se borren los datos de navegación del browser): 
*/

// Método ->  localStorage.setItem(clave, valor)
// clave = nombre para identificar el elemento 
// valor = valor/contenido del elemento 

// Guardar datos en localStorage con setItm
// Los datos que se almacenan en el localStorage se transforman y guardan en string

localStorage.setItem("mensaje", "Hola mundo");
localStorage.setItem("activo", true);
localStorage.setItem("nombre", "Juan");
localStorage.setItem("edad", 34);


console.log("");
console.log("---------- LocalStorage getItem ----------");

/* 
Podemos acceder a la información almacenada en localStorage utilizando getItem. 
Las claves y valores de Storage se guardan en formato de cadena de caracteres (DOMString).
*/

// Los datos recuperados del localStorage siempre son string

let mensaje = localStorage.getItem("mensaje");
console.log(mensaje);

let activo = localStorage.getItem("activo");
console.log(activo);
console.log(typeof activo);

let edad = localStorage.getItem("edad");
console.log(edad);
console.log(typeof edad);


console.log("");
console.log("---------- LocalStorage valores key ----------");

console.log(localStorage);
console.log(localStorage.length);
console.log(localStorage.key(0));
console.log(localStorage.key(1));
console.log(localStorage.key(2));
console.log(localStorage.key(3));


console.log("");
console.log("---------- LocalStorage removeItem ----------");
// Eliminando datos del storage funcionan tanto en el localStorage como en el sessionStorage

// Eliminar un item especifico
localStorage.removeItem("edad");
localStorage.removeItem("nombre");
console.log(localStorage);

console.log("");
console.log("---------- LocalStorage clear ----------");
// Eliminar todo el localStorage
localStorage.clear();
console.log(localStorage);


// Almacenando objetos en localStorage

let productos = [
    {
        nombre: "Remera",
        precio: 200
    },
    {
        nombre: "Pantalon",
        precio: 500
    },
    {
        nombre: "Camisa",
        precio: 300
    },
];

localStorage.setItem("carrito", productos);

/* 
Si queremos almacenar la información de un objeto en un storage, hay que tener en cuenta que tanto la clave 
como el valor se almacenan en strings. 
Ante cualquier otro tipo a guardar, como un número o un objeto, se convierte a cadena de texto automáticamente.
Para guardar la información correctamente hay que transformar el objeto a JSON.

¿Que es JSON?
JavaScript Object Notation (JSON) es un formato basado en texto plano, para representar datos estructurados 
con la sintaxis de objetos de JavaScript. Es comúnmente utilizado para enviar y almacenar datos en aplicaciones web.
Aunque es muy parecido (casi similar) a la sintaxis de JavaScript, puede ser utilizado independientemente de JavaScript, 
y muchos entornos de programación poseen la capacidad de leer (convertir; parsear) y generar JSON.
JSON es un string con un formato específico.
*/

// Objeto JavaScript
// {
//     nombre: "Remera",
//     precio: 200
// },

// Objeto JSON
// {
//     "nombre": "Remera",
//     "precio": "200"
// },


console.log("");
console.log("---------- LocalStorage JSON Stringify ----------");
// JSON Stringify 

// Con JSON.stringify podemos transformar un objeto JavaScript a un string en formato JSON.
localStorage.setItem("carritoStringify", JSON.stringify(productos));


let carrito = localStorage.getItem("carritoStringify");

console.log(carrito);
console.log(typeof carrito);

// JSON Parse
// Con JSON.parse podemos transformar string en formato JSON a objeto JavaScript.

let carritoJS = JSON.parse(localStorage.getItem("carritoStringify"));

console.log(carritoJS);
console.log(carritoJS[0]);
console.log(carritoJS[1]);

console.log(typeof productos);

