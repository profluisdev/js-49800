console.log("");
console.log("---------- Switch ----------");

/* 
En JavaScript, la sentencia switch se utiliza para tomar decisiones basadas en el valor de una expresión. 
Es una alternativa a utilizar múltiples sentencias if-else cuando se tienen múltiples condiciones de manera más ordenada.
*/

let diaDeLaSemana = 10;

switch (
  diaDeLaSemana // Condición
) {
  case 1: // En caso de que el valor de la variable diaDeLaSemana sea 1 de ejecuta el console.log
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miércoles");
    break;
  case 4:
    console.log("Jueves");
    break;
  case 5:
    console.log("Viernes");
    break;
  case 6:
    console.log("Sábado");
    break;
  case 7:
    console.log("Domingo");
    break;
  default: // Si la variable diaDeLaSemana no coincide con ninguno de los casos se ejecuta el default
    console.log("Valor no válido");
}

// Ejemplo de combinar un switch con un ciclo while
let encendido = true;

while (encendido) {
  // Mostrar un mensaje de opciones al usuario
  let opcion = parseInt(prompt("Selecciona una opción:\n1. Saludar\n2. Despedir\n3. Salir"));

  // Evaluar la opción seleccionada usando un switch
  switch (opcion) {
    case 1:
      alert("¡Hola! ¡Bienvenido!");
      break;
    case 2:
      alert("¡Hasta luego! ¡Que tengas un buen día!");
      break;
    case 3:
      encendido = false; // Salir del bucle while
      break;
    default:
      alert("Opción inválida. Por favor, selecciona una opción válida.");
      break;
  }
}

alert("Gracias por venir lo esperamos pronto");