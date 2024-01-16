import { crearTarea } from "../models/tareas.model.js";
import htmlElements from "../elements/html.elements";
import { crearBoton } from "../elements/button.element.js";
import Swal from "sweetalert2";
import Toastify from "toastify-js"
import "toastify-js/src/toastify.css"

let tareas = JSON.parse(localStorage.getItem("tareas")) || [];

const mostrarTareas = (tareas) => {
    // Borramos todos los elementos que tenga el contenedor
    htmlElements.tareasContenedor.innerHTML = "";

    tareas.forEach((tarea) => {
        let tarjeta = document.createElement("div");
        tarjeta.className = "d-flex mt-3 justify-content-between align-items-center border border-2 rounded-2 p-3";
        tarjeta.innerHTML = ` <p class="${tarea.realizado ? "text-decoration-line-through" : "align-self-end"}">${tarea.data}</p>`;
        // Conenedor de botones
        let btnContenedor = document.createElement("div");

        // Agregamos el contenedor de botones dentro de la tarjeta
        tarjeta.appendChild(btnContenedor);

        // Botón eliminar
        let btnEliminar = crearBoton("Eliminar", "btn", "btn-danger", "ms-2");

        // Agregamos evento al botón creado
        btnEliminar.onclick = () => eliminarTarea(tarea.id);

        // Agregamos el botón de eliminar dentro del contenedor de botones
        btnContenedor.appendChild(btnEliminar);

        // Botón realizado
        let btnRealizado = crearBoton(
            `${tarea.realizado ? "Cancelar" : "Realizado"}`,
            "btn",
            `${tarea.realizado ? "btn-warning" : "btn-success"}`,
            "ms-2"
        );
        // Agregamos un evento al botón
        btnRealizado.onclick = () => cambiarEstadoTarea(tarea.id);

        // Agregamos el botón de Realizado dentro del contenedor de botones
        btnContenedor.appendChild(btnRealizado);

        // Agregamos las tarjetas creadas al contenedor de tareas
        htmlElements.tareasContenedor.appendChild(tarjeta);
    });
};

const agregarTarea = () => {
    let tareaNueva = crearTarea(htmlElements.inputTarea.value); // new Tarea(htmlElements.inputTarea.value);
    tareas.push(tareaNueva);
    localStorage.setItem("tareas", JSON.stringify(tareas));
    console.log(tareas);
    Toastify({
        text: `Se agrego la tarea ${htmlElements.inputTarea.value}`,
        position: "left",
        gravity: "bottom"
    }).showToast();
    mostrarTareas(tareas);
};

const cambiarEstadoTarea = (idTarea) => {
    // Buscamos la posición indice de la tarea dentro de nuestro array
    let index = tareas.findIndex((tarea) => tarea.id === idTarea);

    // Modificamos el valor booleano del estado realizado de false a true o viceversa
    tareas[index].realizado = !tareas[index].realizado;

    // Luego de modificar el estado de la tarea guardamos el array actualizado en el localStorage
    localStorage.setItem("tareas", JSON.stringify(tareas));

    mostrarTareas(tareas);
};

const eliminarTarea = (idTarea) => {
    Swal.fire({
        title: "¿Estas seguro que deseas eliminar la tarea?",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Si",
        cancelButtonText: "No",
        cancelButtonColor: "red",
        confirmButtonColor: "green"
    }).then((resp) => {
        if (resp.isConfirmed) {
            // Filtramos la tareas que no coincidan con el id recibido
            tareas = tareas.filter((tarea) => tarea.id !== idTarea);
            // Luego las tareas filtradas las guardamos en el localStorage para que que se actualice
            localStorage.setItem("tareas", JSON.stringify(tareas));
            // Mostramos el nuevo listado de tareas modificado

            Swal.fire({
                title: "Tarea eliminada",
                showConfirmButton: false,
                timer: 1000
            })

            mostrarTareas(tareas);
        }

        
    });
};

const filtrarTareas = (estadoTarea) => {
    if (estadoTarea === "realizadas") {
        // filtramos las tareas que están en true
        let tareasFiltradas = tareas.filter((tarea) => tarea.realizado === true);
        mostrarTareas(tareasFiltradas);
    } else if (estadoTarea === "noRealizadas") {
        let tareasFiltradas = tareas.filter((tarea) => tarea.realizado === false);
        mostrarTareas(tareasFiltradas);
    } else {
        mostrarTareas(tareas);
    }
};

export default {
    tareas,
    mostrarTareas,
    agregarTarea,
    cambiarEstadoTarea,
    eliminarTarea,
    filtrarTareas,
};
