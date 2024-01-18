
import { rootApp } from "../../main";
import usuariosManager from "../managers/usuarios.manager";
import registroPage from "../pages/registro.html?raw";
// import { Login } from "./Login";

export const Registro = () => {
    rootApp.innerHTML = "";
    rootApp.innerHTML = registroPage;

    let nombre = document.querySelector("#nombre");
    let apellido = document.querySelector("#apellido");
    let email = document.querySelector("#email");
    let password = document.querySelector("#password");
    let formRegistro = document.querySelector("#formRegistro");

    formRegistro.onsubmit = (e) => {
        e.preventDefault();
       const status = usuariosManager.registrarUsuario(nombre.value, apellido.value, email.value, password.value);
        // if(status) {
        //     Login();
        // }
    }

}