console.log("");
console.log("---------- Método map ----------");

/* 
El método map() nos crea un nuevo array, con la misma cantidad de elementos del array, 
solo que se almacenan en los mismos el retorno de la función establecida
*/

const cursos = [
    { nombre: "Javascript", precio: 15000 },
    { nombre: "ReactJS", precio: 22000 },
    { nombre: "AngularJS", precio: 21000 },
    { nombre: "Desarrollo Web", precio: 16000 },
  ];

// Copia de un array en un array nuevo con map 
const cursosCopia = cursos.map( curso => curso );
console.log(cursosCopia);

// Copiar en un array solamente la propiedad nombre de los elementos en un array nuevo
const nombreCursos = cursos.map(curso => curso.nombre);
console.log(nombreCursos);

let opcion = 1;

const nombresCursosNumerados = cursos.map( curso => {
    let cursoModificado = {
        opcion,
        nombre: curso.nombre
    };
    opcion++;

    return cursoModificado;
})

console.log(nombresCursosNumerados);

const cursosConStock = cursos.map( curso => {
    let cursoModificado = {
        nombre: curso.nombre,
        precio: curso.precio,
        stock: 0
    }

    return cursoModificado;
})

console.log(cursosConStock);

const cursosBlackFriday = cursos.map( curso => {
    curso = {
        nombre: curso.nombre,
        precio: curso.precio * 0.40
    }

    return curso;
})

console.log(cursosBlackFriday);

