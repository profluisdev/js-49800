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
