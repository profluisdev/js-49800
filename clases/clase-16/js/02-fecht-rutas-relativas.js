console.log("");
console.log("---------- Fetch rutas relativas ----------");

/* 
Si la URL utilizada no contiene el prefijo ‘https:’, la ruta es relativa. Así, podemos hacer una petición a algún archivo local 
en formato JSON usando fetch.
*/

let products = [];


fetch("/data/productos.json")
    .then( resp => resp.json())
    .then( data => {
        products = [...data];
        console.log(products);
    })

