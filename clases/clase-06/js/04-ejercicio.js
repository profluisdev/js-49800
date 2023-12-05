let encendido = true;
let productos = [];

class Producto {
  constructor() {
    this.nombre = prompt("Ingrese el nombre del producto");
    this.precio = parseFloat(prompt("Ingrese el precio del producto"));
  }
}

while (encendido) {
  let opcion = parseInt(
    prompt(
      `
        Bienvenidos a nuestra app
        1 - Agregar un producto
        2 - Quitar un producto
        3 - Mostrar los productos
        4 - Salir
        `
    )
  );

  switch (opcion) {
    case 1:
      productos.push(new Producto());
      break;
    case 2:
      // Pedimos al usuario el nombre del producto que deseamos eliminar
      let datoUsuario = prompt("Ingrese el nombre del producto a eliminar");
      // Creamos una array donde vamos a almacenar solamente los nombres de los productos
      let productosNombres = [];
      // Realizamos un ciclo for of para recorre el array des productos y de esta manera almacenamos los nombres
      // de los productos en el array de productosNombres
      for (let producto of productos) {
        productosNombres.push(producto.nombre);
      }

      // Utilizamos el método indexOf para encontrar la posición del nombre del producto ingresado por el usuario
      let indice = productosNombres.indexOf(datoUsuario);
      // Verificar el resultado de indexOf en caso de que sea -1 devuelve un alert diciendo que no existe
      // En caso de que el resultado sea un valor utilizamos el método splice para quitar el nombre en la posición obtenida
      if (indice !== -1) {
        productos.splice(indice, 1);
      } else {
        alert(`No se encontró el producto ${datoUsuario}`);
      }
      break;
    case 3:
      for (let producto of productos) {
        alert(`
             Nombre: ${producto.nombre}
             Precio: ${producto.precio}
            `);
      }
      break;
    case 4:
      encendido = false;
      break;
    default:
      alert("Ingrese una opción válida");
      break;
  }
}
