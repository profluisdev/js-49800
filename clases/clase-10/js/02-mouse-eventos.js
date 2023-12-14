// Eventos de Mouse

// Se producen por la interacción del usuario con el mouse.

const box1 = document.querySelector("#box1");
const box2 = document.querySelector("#box2");
const box3 = document.querySelector("#box3");

// mousemove
// El movimiento del mouse sobre el elemento activa el evento.
box1.addEventListener("mousemove", () => {
  console.log("Mouse dentro del Box 1");
});

// mousedown
// Se oprime el botón del ratón sobre un elemento.
box2.addEventListener("mousedown", () => {
  console.log("Evento mousedown");
});

// mouseup
// Se suelta el botón del ratón sobre un elemento.
box2.addEventListener("mouseup", () => {
  console.log("Evento mouseup");
});

// mouseout
// El puntero del mouse se mueve sale del elemento

box3.addEventListener("mousemove", () => {
  box3.classList.add("bg-danger");
  box3.innerText = "Dentro";
});

box3.addEventListener("mouseout", () => {
  box3.classList.remove("bg-danger");
  box3.innerText = "Box 3";
});

let btnSumar = document.querySelector("#btnSumar");
let btnRestar = document.querySelector("#btnRestar");
let contador = document.querySelector("#contador");

let numeroContador = 0;

contador.innerText = numeroContador;

// let stock = 5;

btnSumar.onclick = () => {
    // if(numeroContador == stock) {
    //     return numeroContador = stock;
    // }
  numeroContador++;
  contador.innerText = numeroContador;
};

btnRestar.onclick = () => {
  if (numeroContador == 0) {
    return (numeroContador = 0);
    // el return hace que salga de la función y no se ejecute el resto el código
  }
  numeroContador--;
  contador.innerText = numeroContador;
};
