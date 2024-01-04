console.log("");
console.log("---------- Operador rest params ----------");

/* 
El operador spread también puede utilizarse dentro de la declaración de una función para indicar que queremos recibir una 
cantidad indeterminada de parámetros.
*/

const arrayElementos = (...elementos) => {

    console.log(elementos);

}

arrayElementos("Juan", "Ana", "Pedro");

const personaConMascotas = ( persona, ...mascotas ) => {
    
    let personaMascoteada = {
        ...persona,
        mascotas
    }

    console.log(personaMascoteada);
}

let juan = {
    nombre: "Juan",
    apellido: "Perez"
}

personaConMascotas(juan, "Jane", "kratos", "lucas", "Akira");

