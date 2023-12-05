console.log("");
console.log("---------- Método filter ----------");

/* 
El método filter() recibe, al igual que find(), una función comparadora por parámetro, y retorna un nuevo array 
con todos los elementos que cumplan esa condición. Si no hay coincidencias, retornará un array vacío
*/

const cursos = [
    { nombre: "Javascript", precio: 15000 },
    { nombre: "ReactJS", precio: 22000 },
    { nombre: "AngularJS", precio: 21000 },
    { nombre: "Desarrollo Web", precio: 16000 },
  ];

const mayoresA17000 = cursos.filter( curso => curso.precio > 17000 );
console.log(mayoresA17000);

const menoresA17000 = cursos.filter(curso => curso.precio < 17000);
console.log(menoresA17000);

const sinAngular = cursos.filter( curso => curso.nombre.toLowerCase() !== "AngularJs".toLowerCase());
console.log(sinAngular);
