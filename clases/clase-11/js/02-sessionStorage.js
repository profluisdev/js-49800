// sessionStorage

/* 
La información almacenada en sessionStorage se almacena en el navegador hasta que el usuario cierra la ventana. 
Solo existe dentro de la pestaña actual del navegador. Otra pestaña con la misma página tendrá otro 
sessionStorage distinto.
*/

// Método ->  sessionStorage.setItem(clave, valor)
// clave = nombre del elemento
// valor = Contenido del elemento

// Guardar datos en el sessionStorage
sessionStorage.setItem("email", "alumno@coder.com");

console.log("");
console.log("---------- SessionStorage getItem ----------");

// Recuperar información del sessionStorage

let email = sessionStorage.getItem("email");
console.log(email);
console.log(sessionStorage);
console.log(sessionStorage.key(0));

