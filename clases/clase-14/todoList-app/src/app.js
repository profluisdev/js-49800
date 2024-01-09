import htmlElements from "./elements/html.elements";
import tareasManager from "./managers/tareas.manager";

export const app = () => {
       // Ejecutamos actividad iniciales
       console.log("Ejecutando aplicación");
       htmlElements.formTarea.onsubmit = (event) => {
              event.preventDefault();
              tareasManager.agregarTarea();
       }

       tareasManager.mostrarTareas(tareasManager.tareas);

       htmlElements.filtroTareas.onchange = () => {
              console.log(htmlElements.filtroTareas.value);
              tareasManager.filtrarTareas(htmlElements.filtroTareas.value)
       }
}