import { rootApp } from "../../main";
import tareasManager from "../managers/tareas.manager";
import todoAppPage from "../pages/todoApp.html?raw";

export const TodoApp = () => {
    rootApp.innerHTML = "";

    let todoApp = document.createElement("div");
    todoApp.innerHTML = todoAppPage;
    rootApp.appendChild(todoApp);

    let formTarea = document.querySelector("#formTarea");
    let inputTarea = document.querySelector("#inputTarea");
    let tareasContenedor = document.querySelector("#tareasContenedor");
    let filtroTareas = document.querySelector("#filtroTareas");

    tareasManager.mostrarTareas(tareasContenedor);

    formTarea.onsubmit = (event) => {
        event.preventDefault();
        tareasManager.agregarTarea(inputTarea.value, tareasContenedor)
    }

    filtroTareas.onchange = () => {
        console.log(filtroTareas.value);
        tareasManager.filtrarTareas(filtroTareas.value, tareasContenedor)
    }

};
