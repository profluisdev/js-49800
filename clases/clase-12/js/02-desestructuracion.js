console.log("");
console.log("---------- Desestructuración de objetos ----------");

// Es una técnica que nos permite declarar variables donde guardar propiedades de un objeto de forma rápida y directa.

const persona = {
  nombre: "Jose",
  edad: 22,
};

// let nombre = persona.nombre;
// console.log(nombre);
// let edad = persona.edad;
// console.log(edad);

const { nombre, edad } = persona;
console.log(nombre);
console.log(edad);

console.log(persona);

// Desestructurando objetos dentro de objetos

const producto = {
  titulo: "Teléfono Celular",
  marca: "Samsung",
  modelo: "S22",
  caracteristicas: {
    pantalla: "6,7",
    color: "Azul",
  },
};

console.log(producto);

const {
  titulo,
  modelo,
  marca,
  caracteristicas: { pantalla, color },
} = producto;
console.log(titulo);
console.log(modelo);
console.log(marca);
console.log(pantalla);
console.log(color);

console.log(producto);

const producto2 = {
    titulo: "Teléfono Celular",
    marca: "Samsung",
    modelo: "S22",
    precio: 400,
    caracteristicas: {
      pantalla: "6,7",
      color: "Azul",
    },
}


console.log("");
console.log("---------- Desestructuración Alias ----------");

const persona2 = {
  nombre: "Miguel",
  edad: 45,
};

const { nombre: nombreP2, edad: edadP2 } = persona2;
console.log(nombreP2);
console.log(edadP2);

console.log("");
console.log("---------- Desestructuración en parámetros de funciones ----------");

const mostrarDatos = (persona) => {
  console.log(`El nombre es ${persona.nombre}`);
  console.log(`La edad es ${persona.edad}`);
};

mostrarDatos(persona);

const mostrarDatos2 = ({ nombre, edad }) => {
  console.log(`El nombre es ${nombre}`);
  console.log(`La edad es ${edad}`);
};
const mostrarDatos3 = ({ nombre, edad }) => {
  console.log(nombre ?? "No ingreso nombre");
  console.log(edad ?? "No ingreso edad");
};

mostrarDatos2(persona2);

let persona3 = {
  name: "Ana",
  age: 25,
};

mostrarDatos2(persona3);

mostrarDatos3(persona3);

console.log("");
console.log("---------- Desestructuración de Arrays ----------");

const nombres = ["Juan", "Julieta", "Carlos", "Mariela"];

const [ n1, nombreJulieta, nombre3, nombre4 ] = nombres;

console.log(n1);
console.log(nombreJulieta);
console.log(nombre3);
console.log(nombre4);

const [ , n2, , n4 ] = nombres;
console.log(n2);
console.log(n4);

const nombres2 = ["Juan", "Julieta", "Carlos", "Mariela", ["Pepe", "Miguel"]];

const [,,,,pepeYmiguel] = nombres2;
console.log(pepeYmiguel);

const [, miguel] = pepeYmiguel;
console.log(miguel);

console.log(nombres);
console.log(nombres2);

// Desestructurar un sub array en la misma linea
// const [,,,,[, miguel]] = nombres2;

// console.log(miguel);