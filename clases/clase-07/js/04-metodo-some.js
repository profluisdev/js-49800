console.log("");
console.log("---------- Método some ----------");

/* 
Es muy similar al método find, es un método de búsqueda solo que en lugar de retornar el elemento, 
retorna un booleano true o false
*/

const cursos = [
  { nombre: "Javascript", precio: 15000 },
  { nombre: "ReactJS", precio: 22000 },
  { nombre: "AngularJS", precio: 22000 },
  { nombre: "Desarrollo Web", precio: 16000 },
];

console.log(cursos.some((curso) => curso.nombre === "Javascript")); // true
console.log(cursos.some((curso) => curso.nombre === "Backend")); // false




