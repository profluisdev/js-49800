console.log("");
console.log("---------- Promesas ----------");

/* 
Es un objeto de Javascript que representa un evento a futuro. Es una acción asincrónica que se puede completar en algún momento 
y producir un valor, y notificar cuando esto suceda.
Una promesa cuenta con tres estados posibles: pending, fulfilled y rejected. 
Las promesas pueden ser resueltas o rechazadas.
*/

// Sintaxis de una promesa

new Promise( (resolve, reject) => {} );

// En principio, una promesa se retorna con estado pending, entendiendo que el valor a generar aún no fue resuelto.

const eventoFuturo = ( estado ) => {
    // Esta función va a retornar una promesa
    return new Promise(  (resolve, reject) => {
    setTimeout(() => {
            if(estado) {
                resolve( "Promesa resuelta" )
            } else {
                reject( "Promesa rechazada" )
            }
        } )
    }, 1000);
}

// console.log( eventoFuturo(true) );
// console.log( eventoFuturo(false) );

/* 
En este caso, el console.log es sincrónico y vemos que la promesa está en pending en ambos llamados (su resolución se generará dentro de 1s). 
Las promesas tienen un mecanismo para trabajar esta asincronía y poder ejecutar funciones cuando cambie su estado.
*/

console.log("");
console.log("---------- Then & Catch ----------");

// Usamos el then para atrapar la respuesta de una promesa resuelta y el catch para atrapar la respuesta de una promesa rechazada

const usuarios = [
    {
        id: 1,
        nombre: "Juan",
    },
    {
        id: 2,
        nombre: "Maria",
    },
    {
        id: 3,
        nombre: "Pedro",
    },
];

const buscarUsuarioPorId = ( id ) => {
    // Buscamos el usuario con el id que recibimos por parámetro
    const usuario = usuarios.find( usuario => usuario.id === id );

    // Retornar una promesa 
    return new Promise( ( resolve, reject ) => {

        if(usuario) {
             // Si el el resultado de la búsqueda nos da un usuario que existe
            // Resolvemos la promesa devolviendo el valor del usuario encontrado
            resolve(usuario)
        } else {
            // Rechazamos la promesa
            reject( `No se encontró el usuario con el id ${id}` )
        }

    } )
}

buscarUsuarioPorId(34)
    .then( respuesta => {
        // El valor que recibimos por el parámetro es la información que recibimos del resolve()
        console.log(respuesta);
    } )
    .catch( error => console.log(`Error: ${error}`) )
    .finally(() => {
        console.log("Fin del proceso");
    })


// Ejercicio 

const buscarUsuarios = () => {
    
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve( usuarios );
        }, 2000);
    } )
}


let listaUsuarios = document.querySelector("#listaUsuarios");

const mostrarUsuarios = ( usuarios ) => {
    listaUsuarios.innerText = "";

    usuarios.forEach( usuario => {
        let nombreUsuario = document.createElement("p");
        nombreUsuario.innerText = usuario.nombre;
        listaUsuarios.append(nombreUsuario);
    });
}

buscarUsuarios()
    .then( respuesta =>  mostrarUsuarios( respuesta ));


let input1 = document.querySelector("#input1");
let input2 = document.querySelector("#input2");
let input3 = document.querySelector("#input3");

const mostrar = () => {
    let usuario = {
        nombre: input1.value,
        apellido: input2.value,
        domicilio: input3.value
    }

    console.log(usuario);
}

input1.oninput = () => {
    mostrar()
}
input2.oninput = () => {
    mostrar()
}
input3.oninput = () => {
    mostrar()
}
