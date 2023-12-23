import { crearTarea } from "../models/tareas.model.js";
import htmlElements from "../elements/html.elements";

let tareas = JSON.parse(localStorage.getItem("tareas")) || [];

const mostrarTareas = () => {
    // Borramos todos los elementos que tenga el contenedor
    htmlElements.tareasContenedor.innerHTML = "";
    console.log(tareas);

    tareas.forEach( tarea => {
        let tarjeta = document.createElement("div");
        tarjeta.className = "d-flex mt-3 justify-content-between align-items-center border border-2 rounded-2 p-3";
        tarjeta.innerHTML =  ` <p class="${tarea.realizado ? "text-decoration-line-through" : "align-self-end"}">${tarea.data}</p>`;
        // Conenedor de botones
        let btnContenedor = document.createElement("div");
        
        // Agregamos el contenedor de botones dentro de la tarjeta
        tarjeta.appendChild(btnContenedor);
        
        // Botón eliminar
        let btnEliminar = document.createElement("button");
        btnEliminar.innerText = "Eliminar";
        btnEliminar.className = "btn btn-danger ms-2";
        // Agregamos evento al botón creado
        btnEliminar.onclick = () => eliminarTarea(tarea.id);

        // Agregamos el botón de eliminar dentro del contenedor de botones
        btnContenedor.appendChild(btnEliminar);
        
        // Botón realizado
        let btnRealizado = document.createElement("button");
        btnRealizado.innerText = "Realizado";
        btnRealizado.className = "btn btn-success ms-2";
        // Agregamos un evento al botón
        btnRealizado.onclick = () => cambiarEstadoTarea(tarea.id);
 
        // Agregamos el botón de Realizado dentro del contenedor de botones
        btnContenedor.appendChild(btnRealizado);



        // Agregamos las tarjetas creadas al contenedor de tareas
        htmlElements.tareasContenedor.appendChild(tarjeta);
    });


}

const agregarTarea = () => {
    let tareaNueva = crearTarea(htmlElements.inputTarea.value); // new Tarea(htmlElements.inputTarea.value);
    tareas.push(tareaNueva);
    localStorage.setItem("tareas", JSON.stringify(tareas));
    console.log(tareas);
    mostrarTareas();
}

const cambiarEstadoTarea = (idTarea) => {
    // Buscamos la posición indice de la tarea dentro de nuestro array
    let index = tareas.findIndex(tarea => tarea.id === idTarea);

    // Modificamos el valor booleano del estado realizado de false a true o viceversa
    tareas[index].realizado = !tareas[index].realizado;

    // Luego de modificar el estado de la tarea guardamos el array actualizado en el localStorage
    localStorage.setItem("tareas", JSON.stringify(tareas));

    mostrarTareas();
}

const eliminarTarea = (idTarea) => {
    // Filtramos la tareas que no coincidan con el id recibido
    tareas = tareas.filter( tarea => tarea.id !== idTarea);
    // Luego las tareas filtradas las guardamos en el localStorage para que que se actualice
    localStorage.setItem("tareas", JSON.stringify(tareas));
    // Mostramos el nuevo listado de tareas modificado
    mostrarTareas();
}

export default {
    mostrarTareas,
    agregarTarea,
    cambiarEstadoTarea,
    eliminarTarea
}