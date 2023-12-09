// Funciones globales

const existeElementoId = (array, idReferencia) => {
  let existe = array.some( elemento => elemento.id === idReferencia );
  return existe;
}

// Sección de usuarios

let userId = 1;
let usuarios = [];

class Usuario {
  constructor(nombre, apellido, email) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.id = userId;
  }
}


const agregarUsuario = (usuario) => {
    usuarios.push(usuario);
    userId++
};

const eliminarUsuario = ( id ) => {

  if(existeElementoId(usuarios, id)) {
    usuarios = usuarios.filter(usuario => usuario.id !== id);
  } else {
    alert("No existe ningún usuario con ese ID");
  }
};

const mostrarUsuarios = () => {
    let nombresUsuarios = usuarios.map( usuario => `ID: ${usuario.id} - Nombre: ${usuario.nombre}` );
    // verificar si hay elementos en el array 
    if(nombresUsuarios.length > 0) {
      alert(nombresUsuarios.join("\n"));
    } else {
      alert("No hay usuarios registrados");
    }
};

// Sección de mascotas

// Sección de Menus

const menuUsuarios = () => {
  let estado = true;

  while (estado) {
    let opcion = parseInt(
      prompt(
        `
        Bienvenido a Menú de usuarios
        1 - Mostrar usuarios
        2 - Agregar un usuario
        3 - Eliminar un usuario
        4 - Volver
        `
      )
    );

    switch (opcion) {
      case 1:
        mostrarUsuarios();
        break;
      case 2:
        let nombre = prompt("Ingrese el nombre del usuario");
        let apellido = prompt("Ingrese el apellido del usuario");
        let email = prompt("Ingrese el email del usuario");
        let usuario = new Usuario(nombre, apellido, email);
        agregarUsuario(usuario);
        break;
      case 3:
        let idUsuario = parseInt(prompt("Ingrese el ID del usuario a eliminar"));
        eliminarUsuario(idUsuario);
        break;
      case 4:
        estado = false;
        menuPrincipal();
        break;

      default:
        alert("Ingrese una opción válida");
        break;
    }
  }
};

let estado = true;
const menuPrincipal = () => {
  while (estado) {
    let opcion = parseInt(
      prompt(
        `
      Bienvenido a nuestra APP de Adopción de Mascotas
      1 - Opciones de usuarios
      2 - Opciones de Mascota
      3 - Salir
      `
      )
    );
    switch (opcion) {
      case 1:
        // menú de usuarios
        menuUsuarios();
        break;
      case 2:
        // menú de mascotas
        break;
      case 3:
        estado = false;
        break;
      default:
        alert("Ingrese una opción válida");
        break;
    }
  }
};

menuPrincipal();
