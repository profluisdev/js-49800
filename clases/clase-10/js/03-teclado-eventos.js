let areaMensaje = document.querySelector("#areaMensaje");
let nombreUsuario = document.querySelector("#nombreUsuario");
let mensajeUsuario = document.querySelector("#mensajeUsuario");

let notificacion = document.createElement("p");
notificacion.classList.add("position-absolute");

//keydown: Cuando se presiona una tecla en el teclado.
nombreUsuario.onkeydown = () => {
  // Mostramos el valor del input cada ves que presionamos el teclado
  console.log(nombreUsuario.value);
  notificacion.innerText = `${nombreUsuario.value} está escribiendo un mensaje`;
};

mensajeUsuario.onkeydown = () => {
  areaMensaje.append(notificacion);
};

// keyup: Cuando se suelta una tecla en el teclado.
mensajeUsuario.onkeyup = () => {
  if (mensajeUsuario.value == "") {
    notificacion.remove();
  }
};

// Formulario de alumnos

let formulario = document.querySelector("#formulario");
let nombreInput = document.querySelector("#nombreInput");
let apellidoInput = document.querySelector("#apellidoInput");
let listaPersonas = document.querySelector("#listaPersonas");

// Eventos de change
/* 
El evento change se activa cuando se detecta un cambio en el valor del elemento. 
 Por ejemplo, mientras se escribe en un input de tipo texto no hay evento change, 
 pero cuando se pasa a otra sección de la aplicación entonces sí ocurre.
 */

 nombreInput.onchange = () => {
    console.log(nombreInput.value);
 }

 apellidoInput.onchange = () => {
    console.log(apellidoInput.value);
 }

// Eventos de submit
/* 
El evento submit se activa cuando el formulario es enviado. 
Normalmente se utiliza para validar el formulario antes de ser enviado al servidor o bien para abortar 
el envío y procesarlo con JavaScript.
*/

let alumnos = [];

const mostrarAlumnos = () => {
    // Cada vez que se ejecuta la función dejamos la lista vacía
    listaPersonas.innerText = "";

    alumnos.forEach( alumno => {
        // Creo una etiqueta li por cada usuario del array
        let li = document.createElement("li");
        li.innerText = `${alumno.nombre} ${alumno.apellido}`;
        listaPersonas.appendChild(li);
    })
}

formulario.onsubmit = (event) => {
    event.preventDefault();
    console.log("Formulario");

    if(nombreInput.value === "" || apellidoInput.value === "") {
        return alert("Debe completar todos los campos")
    }
    
    let alumno = {
        nombre: nombreInput.value,
        apellido: apellidoInput.value
    }

    
    alumnos.push(alumno);
    console.log(alumnos);
    formulario.reset();
    mostrarAlumnos();
}