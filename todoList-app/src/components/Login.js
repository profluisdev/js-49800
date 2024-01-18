import Swal from "sweetalert2";
import { rootApp } from "../../main";
import usuariosManager from "../managers/usuarios.manager";
import loginPage from "../pages/login.html?raw";
import { Registro } from "./Registro";
import { TodoApp } from "./TodoApp";

export const Login = () => {
    rootApp.innerHTML = "";
    rootApp.innerHTML = loginPage;
    
    let email = document.querySelector("#email");
    let password = document.querySelector("#password");
    let loginForm = document.querySelector("#loginForm");
    let linkRegistro = document.querySelector("#linkRegistro");

    loginForm.onsubmit = async (e) => {
        e.preventDefault();
        console.log(email.value);
        console.log(password.value);
        const status = await usuariosManager.loginUsuario(email.value, password.value);
        console.log(status);
        if (status) {
            TodoApp();
        } else {
            Swal.fire({
                title: "Email o Contraseña no válido",
            });
        }
    };

    linkRegistro.onclick = () => {
        Registro();
    };
};
