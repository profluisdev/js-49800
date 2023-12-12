console.log("");
console.log("---------- Acceso al DOM ----------");

// Acceso al DOM con document

console.log(document);
console.log(document.head);
console.log(document.body);

console.log("");
console.log("---------- Acceso a los nodos por id ----------");

// getElementById()

/* 
El método getElementById() sirve para acceder a un elemento de la estructura HTML, 
utilizando su atributo ID como identificación. 
En caso de no encontrar nos devuelve un null  

Recuerden que los id son identificadores únicos no se deben repetir
*/

let contenedor = document.getElementById("contenedor");
console.log(contenedor);

let parrafo = document.getElementById("parrafo");
console.log(parrafo);
console.log(parrafo.innerText);

console.log("");
console.log("---------- Acceso a los nodos por clase de estilo ----------");
// getElementsByClassName()
/* 
El método getElementsByClassName() sirve para acceder a un conjunto de elementos de la estructura HTML,
utilizando su atributo class como identificación. Se retornará un Array de elementos con todas las coincidencias:
*/

let paises = document.getElementsByClassName("paises");
console.log(paises);
console.log(paises[0]);
console.log(paises[1]);
console.log(paises[2]);
console.log(paises[0].innerText);
console.log(paises[1].innerText);
console.log(paises[2].innerText);

console.log("");
console.log("-------- Acceso a los nodos por etiquetas HTML --------");

// getElementsByTagName()

/* 
El método getElementsByTagName() sirve para acceder a un conjunto de elementos de la estructura HTML,
utilizando su nombre de etiqueta como identificación. Esta opción es la menos específica de todas,
ya que es muy probable que las etiquetas se repitan en el código HTML 
*/

let paises2 = document.getElementsByTagName("li");
console.log(paises2);
console.log(paises2[0]);
console.log(paises2[1]);
console.log(paises2[2]);
console.log(paises2[0].innerText);
console.log(paises2[1].innerText);
console.log(paises2[2].innerText);

let div = document.getElementsByTagName("div");
console.log(div);

console.log("");
console.log("-------- Acceso a los nodos con selector --------");
// querySelector()

/* 
El método querySelector() devuelve el primer elemento que coincide con el selector proporcionado (iguales a los de css).
Si no se encuentra ningún elemento que coincida, se devuelve null. 
*/

// Selectores de css
// Para etiquetas h2 
// Para clases es .
// Para id es #

// Seleccionar un elemento por su etiqueta
let titulo = document.querySelector("h2");
console.log(titulo);

// Seleccionar un elemento por su id
let listaPaises = document.querySelector("#listaPaises");
console.log(listaPaises);

// Seleccionar un elemento por medio de su clase
let botonVolver = document.querySelector(".volver");
console.log(botonVolver);

console.log("");
console.log("-------- Acceso a los nodos con selector multiple --------");

// querySelectorAll()
/* 
A diferencia de querySelector(), que solo devuelve el primer elemento que coincide, querySelectorAll() nos devuelve
un listado de todos los elementos que coincidan en una NodeList en formato de array 
*/

let paises3 = document.querySelectorAll(".paises");
let copia = [];
console.log(paises3);
paises3.forEach( pais => console.log(pais) );
paises3.forEach( pais => console.log(pais.innerText) );

paises3.forEach( pais => copia.push(pais.innerText) );
console.log(copia);


