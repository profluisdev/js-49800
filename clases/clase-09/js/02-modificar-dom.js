console.log("");
console.log("----- Modificación del DOM innerText -----");

/* 
La propiedad innerText de un nodo nos permite modificar su nodo de texto. Es decir, acceder y/o modificar
el contenido textual de algún elemento del DOM. 
*/

const parrafo = document.querySelector("#parrafo");
console.log(parrafo);
console.log(parrafo.innerText);

// Modificamos el párrafo
parrafo.innerText = "Párrafo modificado desde JavaScript";

const subTitulo = document.querySelector("#subTitulo");
subTitulo.innerText = "Nuevo Subtítulo"

console.log("");
console.log("----- Modificación del DOM innerHTML -----");

/* 
innerHTML permite definir el código html interno del elemento seleccionado.
El navegador lo interpreta como código HTML y no como contenido de texto, permitiendo desde un string crear
una nueva estructura de etiquetas y contenido. 
*/

subTitulo.innerHTML = "<h4>DOM Agregado con un h4</h4>";

const contenedor2 = document.querySelector("#contenedor2");

contenedor2.innerHTML = `
<h3>Título del contenedor 2</h3>
<p>Párrafo del contenedor 2</p>
`;

console.log("");
console.log("----- Modificación del DOM ClassName -----");

/* 
A través de la propiedad className de algún nodo seleccionado podemos acceder al atributo class del mismo y
definir cuáles van a ser sus clases 
*/

subTitulo.className = "subTitulo_color";

console.log("");
console.log("----- Modificación del DOM createElement -----");

/* 
Para crear elementos se utiliza la función document.createElement(), y se debe indicar el nombre de 
etiqueta HTML que representará ese elemento.
*/

// Creamos un nuevo contenedor con la etiqueta div
const contenedor3 = document.createElement("div");
console.log(contenedor3);

// Creamos un subtítulo para el contenedor3 con una etiqueta h3
const tituloContenedor3 = document.createElement("h3");
tituloContenedor3.innerText = "Título del contenedor 3";

const parrafoContenedor3 = document.createElement("p");
parrafoContenedor3.innerText = "Texto párrafo 3";

console.log("");
console.log("----- Modificación del DOM append -----");

// El método append() se utiliza para agregar uno o varios elementos al final de un elemento padre

const container = document.querySelector(".container");
container.append(contenedor3);

console.log("");
console.log("----- Modificación del DOM appendChild -----");

// El método appendChild()  se utiliza para agregar un nodo como hijo de otro nodo en el DOM

contenedor3.appendChild(tituloContenedor3);
contenedor3.appendChild(parrafoContenedor3);
