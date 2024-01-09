import Swal from "sweetalert2";

const btnAlerta = document.querySelector("#btnAlerta");
const btnAlerta2 = document.querySelector("#btnAlerta2");
const nombre = document.querySelector("#nombre");



Swal.fire({
    inputLabel: "Ingrese su nombre",
    input: "text",
    confirmButtonText: "Enviar"
}).then( respuesta => {
    if(respuesta.isConfirmed) {
        nombre.innerText = respuesta.value
    }
})

btnAlerta.onclick = () => {
    alert("Alerta sass");
};




btnAlerta2.onclick = () => {
    Swal.fire({
        title: "¿Esta seguro que desea transferir?",
        icon: "warning",
        timer: 3000,
        timerProgressBar: true,
        confirmButtonText: "Aceptar",
        confirmButtonColor: "green",
        showCancelButton: true,
        cancelButtonText: "Cancelar",
        cancelButtonColor: "red",
        html: "<h1>Transferir $30000000</h1>",
    }).then((respuesta) => {
        // Verificamos que el usuario presionó confirmar o aceptar
        if (respuesta.isConfirmed) {
            Swal.fire({
                title: "Transferencia realizada",
                imageUrl: "https://img.freepik.com/vector-premium/dinero-efectivo-monedas-oro-dibujos-animados-vector-ilustracion-concepto-financiero-icono-plano-esquema_385450-1393.jpg?w=2000",
                imageWidth: 200
            })
        }

        if (respuesta.isDismissed) {
            Swal.fire({
                title: "No hay plata",
                imageUrl: "https://d22fxaf9t8d39k.cloudfront.net/c8e2a07600c91292fd9480ecf44cde4aee1a6382b16178bdfb8c2e0af9b5d7953394.jpg",
                imageWidth: 200
            })
            
        }
    });
};
