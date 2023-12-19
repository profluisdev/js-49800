import { crearTarea } from "../models/tareas.model.js";
import htmlElements from "../elements/html.elements";

let tareas = [];


const mostrarTareas = () => {
    
}

const agregarTarea = () => {
    let tareaNueva = crearTarea(htmlElements.inputTarea.value); // new Tarea(htmlElements.inputTarea.value);
    tareas.push(tareaNueva);
    localStorage.setItem("tareas", JSON.stringify(tareas));
    console.log(tareas);
}

const cambiarEstadoTarea = () => {
    
}

const eliminarTarea = () => {
    
}

export default {
    mostrarTareas,
    agregarTarea,
    cambiarEstadoTarea,
    eliminarTarea
}