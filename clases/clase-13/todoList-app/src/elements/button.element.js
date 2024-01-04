

export const crearBoton = (texto, ...estilos) => {
     
     let button = document.createElement("button");
     button.innerText = texto;
     button.classList.add(...estilos)
     // button.className = estilos

     return button;
}