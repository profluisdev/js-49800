/* 
Los eventos son la manera que tenemos en Javascript de controlar las acciones de los usuarios, 
y definir un comportamiento de la página o aplicación cuando se produzcan.
Con Javascript es posible definir qué sucede cuando se produce un evento, por ejemplo, 
cuando se realiza un clic en cierto elemento o se inserta un texto en un determinado campo.
*/

const btnClick1 = document.querySelector("#btnClick1");
const btnClick2 = document.querySelector("#btnClick2");
const btnClick3 = document.querySelector("#btnClick3");

// ---------- Definir eventos addEventListener ----------

/* 
Hay que entender que los eventos suceden constantemente en el navegador.
JavaScript lo que nos permite hacer es escuchar eventos sobre elementos seleccionados. 
Cuando escuchamos el evento que esperamos, se ejecuta la función que definimos en respuesta. 
A esta escucha se la denomina event listener.
*/


btnClick1.addEventListener( "click", () => {
    console.log("Hago click en el botón");
} );

// ---------- Definir eventos con métodos on ----------

btnClick2.onclick = () => {
    console.log("Hago click con el on");
}

// ---------- Definir eventos ejecutando funciones desde HTML ----------
{/* <button id="btnClick3" class="btn btn-info" onclick=eventoHtml()>Click HTML Evento</button> */}

const eventoHtml = () => {
    console.log("Hago click desde el evento HTML");
}