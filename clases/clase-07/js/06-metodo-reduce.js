console.log("");
console.log("---------- Método reduce ----------");

/* 
El método reduce en JavaScript se utiliza para reducir los elementos de un array a un solo valor. 
Es una función que toma una función de reducción y la aplica secuencialmente a cada elemento del array, 
acumulando un resultado final.
El método reduce() nos permite obtener un único valor tras iterar sobre todo el array
*/

const numeros = [1, 2, 3, 4, 5, 6];

const total = numeros.reduce( (acumulador, numero) => acumulador + numero, 0 )
// 0 + 1 = 1
// 1 + 2 = 3
// 3 + 3 = 6
// 6 + 4 = 10
// 10 + 5 = 15
// 15 + 6 = 21

const carrito = [
    {
      nombre: "Camisa",
      precio: 200,
    },
    {
      nombre: "Pantalón",
      precio: 300,
    },
    {
      nombre: "Remera",
      precio: 333,
    },
  ];

  const totalCarrito = carrito.reduce( (acumulador, producto) => acumulador + producto.precio, 0 )
  // 0 + 200 = 200
  // 200 + 300 = 500
  // 500 + 333 = 833
  console.log(totalCarrito);

  