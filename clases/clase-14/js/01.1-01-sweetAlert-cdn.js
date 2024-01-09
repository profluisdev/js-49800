const btnAlerta = document.querySelector("#btnAlerta");
const btnAlerta2 = document.querySelector("#btnAlerta2");

btnAlerta.onclick = () => {
    alert("Alerta sass");
};

btnAlerta2.onclick = () => {
   Swal.fire({
    title: "Alerta 2",
    text: "fdsf",
    timer: 2000,
    confirmButtonText: "Aceptar",
   })
};