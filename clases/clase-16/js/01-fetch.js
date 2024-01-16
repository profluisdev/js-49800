console.log("");
console.log("---------- Fetch ----------");

/* 
Javascript nos ofrece el método fetch() para hacer peticiones HTTP a algún servicio externo. Como estas peticiones son asincrónicas, 
convenientemente el método fetch() trabaja con promesas.
El método recibe un primer parámetro que es la URL a la cual hacer la petición, y un segundo parámetro opcional de configuración.
*/

// Método GET

console.log(fetch("https://jsonplaceholder.typicode.com/posts"));

// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then( resp => console.log(resp) )// Obtenemos un objeto de tipo Response

fetch("https://jsonplaceholder.typicode.com/posts")
    .then((resp) => resp.json()) // Usamos el método .json() para extraer la información de la respuestas, el mismo devuelve otra promesa con la información
    .then((data) => console.log(data));

// Consumiendo la api de Rick and Morty

fetch("https://rickandmortyapi.com/api/character")
    .then((reps) => reps.json())
    .then((data) => {
        console.log(data);
        mostrarPersonajes(data.results)
    });

let contenedor = document.querySelector("#contenedor");

const mostrarPersonajes = ( personajes ) => {

    personajes.forEach( personaje => {

        let div = document.createElement("div");
        div.className = "d-flex flex-column border border-1 rounded-2 p-2 w-50 m-1";
        div.innerHTML = `
        <p>Nombre: ${personaje.name} </p>
        <img class="w-25" src=${personaje.image}>
        <p>Genero: ${personaje.gender} </p>
        `
        contenedor.appendChild(div);
    });
}


