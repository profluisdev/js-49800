
import { v4 as generarID } from "uuid"

export class Usuario {
    constructor(nombre, apellido, email, password) {
        this.id = generarID();
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.password = password;
    }
}