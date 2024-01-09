
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css";

const btnToastify = document.querySelector("#btnToastify");
const btnToastify2 = document.querySelector("#btnToastify2");

btnToastify.onclick = () => {
    Toastify({
        text: "Tostada quemada",
        gravity: "bottom",
        position: "center",
        // destination: "www.google.com",
        onClick: () => {
            Toastify({
                text: "click"
            }).showToast()
        }
    }).showToast()

}
