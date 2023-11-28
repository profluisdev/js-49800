console.log("");
console.log("---------- Clases ----------");

/* 
Las clases en JavaScript, al igual que los objetos y las funciones, son una parte fundamental 
de la sintaxis de este lenguaje de programación. Con ellas, podemos crear distintos objetos con 
características específicas, permitiéndonos crear un código más eficiente.
Podemos representar a las clases como plantillas de un modelo de objeto a crear.
*/


class Persona {
    // Atributos
    nombre;
    apellido;
    edad;

    // Métodos: equivalen a una función
    // Método constructor
    constructor(nombre, apellido, edad ) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad
    }
}

const persona1 = new Persona("Juan", "Perez", 30);
console.log(persona1);

const persona2 = new Persona("Ana", "Diaz", 24);
console.log(persona2);

// Mostrar las propiedades de un objeto creado con una clase 
console.log(persona1.nombre);
console.log(persona1.edad);

console.log("");
console.log("---------- Clases con métodos ----------");

class Producto {

    constructor(nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }

    cambiarPrecio( nuevoPrecio ) {
        this.precio = nuevoPrecio;
    }

    comprar(cantidad) {
        if(this.stock > 0) {
            this.stock = this.stock - cantidad;
        } else {
            console.log("No hay stock");
        }
    }

    agregarStock(cantidad) {
        this.stock = this.stock + cantidad;
        console.log(`El nuevo stock es: ${this.stock}`);
    }
}

const productoZapato = new Producto("Zapato", 300, 10);
console.log(productoZapato);

productoZapato.cambiarPrecio(500);
console.log(productoZapato);

productoZapato.comprar(3);
console.log(productoZapato);

productoZapato.agregarStock(10);
console.log(productoZapato);