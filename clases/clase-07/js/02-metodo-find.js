console.log("");
console.log("---------- Método find ----------");

/* 
El método find() recibe una función de comparación por parámetro. Captura el elemento que se está recorriendo 
y retorna true o false según la comparación ejecutada. El método retorna el primer elemento que cumpla con esa condición
*/

const cursos = [
  { nombre: "Javascript", precio: 15000 },
  { nombre: "ReactJS", precio: 22000 },
  { nombre: "AngularJS", precio: 21000 },
  { nombre: "Desarrollo Web", precio: 16000 },
];
console.log(cursos);

// Caso en que se encuentre una coincidencia retorna el primer elemento que coincida con la condición
let cursoReact = cursos.find((curso) => curso.nombre === "ReactJS");
console.log(cursoReact);

// Caso en que no se encuentra coincidencia devuelve un undefined
let cursoJs = cursos.find((curso) => curso.nombre === "pepe");
console.log(cursoJs);

// Utilizando prompt
const cursoBuscado = prompt("Ingrese el nombre del curso a buscar");

// Reducir el error de ingreso del usuario transformando en minúsculas el condicional
const cursoEncontrado = cursos.find((curso) => curso.nombre.toLowerCase() === cursoBuscado.toLowerCase());

if (cursoEncontrado) {
  console.log(cursoEncontrado);
} else {
  console.log(`No se encontró el curso ${cursoBuscado}`);
}

