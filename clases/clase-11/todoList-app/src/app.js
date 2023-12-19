import htmlElements from "./elements/html.elements";
import tareasManager from "./managers/tareas.manager";

export const app = () => {
       // Ejecutamos actividad iniciales
       console.log("Ejecutando aplicación");
       htmlElements.formTarea.onsubmit = (event) => {
              event.preventDefault();
              tareasManager.agregarTarea();
       }
}