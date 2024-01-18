import { Usuario } from "../models/usuario.model";
import usuariosApi from "../api/usuarios.api";

// Registrar un usuario
const registrarUsuario = async (nombre, apellido, email, password) => {
    const nuevoUsuario = new Usuario(nombre, apellido, email, password);
    // Guardar usuario en la base de datos
    await usuariosApi.registrarUsuario(nuevoUsuario);
};

// Buscar un usuario por email
const buscarUsuarioPorEmail = async (email) => {
    // Obtenemos todos los usuarios de la base de datos
    let usuarios = await usuariosApi.obtenerUsuarios();

    // Buscamos si el usuario con ese mail se encuentra registrado en la base de datos
    let usuario = usuarios.find((usuario) => usuario.email === email);

    // Retornamos el usuario encontrado
    return usuario;
};

// Login de usuario
const loginUsuario = async (email, password) => {
    // Buscamos si existe el usuarios
    let usuario = await buscarUsuarioPorEmail(email);
    // Si el usuario no existe retornamos false
    if (!usuario) {
        return false;
    }
    // Verificamos si coinciden las contraseñas
    if (usuario.password !== password) {
        return false;
    }

    // Guardamos los datos del usuario en el session storage
    sessionStorage.setItem("usuario", JSON.stringify(usuario));

    // Retornar los datos del usuario
    return usuario;
};

export default {
    registrarUsuario,
    loginUsuario,
};
