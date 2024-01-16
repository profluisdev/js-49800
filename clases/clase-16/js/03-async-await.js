console.log("");
console.log("---------- Async - Await ----------");

/* 
async y await son características introducidas en ECMAScript 2017 (también conocido como ECMAScript 8 o ES8) 
que facilitan el manejo de las promesas en JavaScript, haciendo el código asíncrono más limpio y fácil de entender.
- Una función que tiene la palabra clave async antes de su declaración se considera una "función asíncrona". 
Las funciones asíncronas siempre devuelven una promesa.

- El operador await solo se puede usar dentro de una función asíncrona. Se utiliza para esperar la resolución de una promesa. 
Mientras se espera, la ejecución de la función asíncrona se detendrá, permitiendo que otras tareas se ejecuten en el 
hilo principal del programa.
*/


// Formato tradicional

let products = [];


// fetch("/data/productos.json")
//     .then( resp => resp.json())
//     .then( data => {
//         products = [...data];
//         console.log(products);
//     })


// Formato moderno con async y await

const obtenerProductos = async () => {
 try { // Equivale al then
    const resp = await fetch("/data/productos.json");
    const data = await resp.json();
    products = [...data];

    console.log(products);

 } catch(error) { // Equivale al catch
    console.log(error);
 }
    
} 

obtenerProductos();


