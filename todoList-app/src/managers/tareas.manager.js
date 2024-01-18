import { crearTarea } from "../models/tareas.model.js";
import { crearBoton } from "../elements/button.element.js";
import tareasApi from "../api/tareas.api.js";
import Swal from "sweetalert2";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

let tareasFiltradas;

const mostrarTareas = async (tareasContenedor) => {
    // Borramos todos los elementos que tenga el contenedor
    tareasContenedor.innerHTML = "";

    let tareasDB = await tareasApi.obtenerTareas();
    let tareas = tareasFiltradas || tareasDB;

    console.log(tareas);

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
        btnEliminar.onclick = () => eliminarTarea(tarea.id, tareasContenedor);

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
        btnRealizado.onclick = () => cambiarEstadoTarea(tarea.id, tareasContenedor);

        // Agregamos el botón de Realizado dentro del contenedor de botones
        btnContenedor.appendChild(btnRealizado);

        // Agregamos las tarjetas creadas al contenedor de tareas
        tareasContenedor.appendChild(tarjeta);
    });
};

const agregarTarea = async (tarea, tareasContenedor) => {
    let tareaNueva = crearTarea(tarea); // new Tarea(htmlElements.inputTarea.value);

    await tareasApi.registrarTarea(tareaNueva);

    Toastify({
        text: `Se agrego la tarea ${tarea}`,
        position: "left",
        gravity: "bottom",
    }).showToast();
    mostrarTareas(tareasContenedor);
};

const cambiarEstadoTarea = async (idTarea, tareasContenedor) => {
    let tarea = await tareasApi.obtenerTareaPorId(idTarea);

    tarea.realizado = !tarea.realizado;

    await tareasApi.actualizarTarea(idTarea, tarea);
    tareasFiltradas = false;
    mostrarTareas(tareasContenedor);
};

const eliminarTarea = (idTarea, tareasContenedor) => {
    Swal.fire({
        title: "¿Estas seguro que deseas eliminar la tarea?",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Si",
        cancelButtonText: "No",
        cancelButtonColor: "red",
        confirmButtonColor: "green",
    }).then(async (resp) => {
        if (resp.isConfirmed) {
            await tareasApi.eliminarTareaPorId(idTarea);

            Swal.fire({
                title: "Tarea eliminada",
                showConfirmButton: false,
                timer: 1000,
            });

            mostrarTareas(tareasContenedor);
        }
    });
};

const filtrarTareas = async (estadoTarea, tareasContenedor) => {
    let tareas = await tareasApi.obtenerTareas();
    if (estadoTarea === "realizadas") {
        // filtramos las tareas que están en true
        tareasFiltradas = tareas.filter((tarea) => tarea.realizado === true);
        mostrarTareas(tareasContenedor);
    } else if (estadoTarea === "noRealizadas") {
        tareasFiltradas = tareas.filter((tarea) => tarea.realizado === false);
        mostrarTareas(tareasContenedor);
    } else {
        tareasFiltradas = false;
        mostrarTareas(tareasContenedor);
    }
};

export default {
    mostrarTareas,
    agregarTarea,
    cambiarEstadoTarea,
    eliminarTarea,
    filtrarTareas,
};
