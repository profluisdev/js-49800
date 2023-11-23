console.log("");
console.log("---------- Funciones ----------");

/* 
Las funciones en JavaScript son bloques de código que se pueden definir una vez y luego reutilizar 
en múltiples partes de un programa
*/

// Declaración de una función

function saludar() {
  console.log("Hola a todos");
  console.log("Este es un curso de JavaScript");
}

// LLamar la función
saludar();

function solicitarNombre() {
  let nombre = prompt("Ingrese el nombre");
  console.log(`El nombre ingresado es ${nombre}`);
}

console.log("");
console.log("---------- Funciones con parámetros ----------");

/* 
Los parámetros en las funciones de JavaScript son variables que se utilizan para recibir datos de entrada cuando se 
llama a la función. Los parámetros son definidos en la declaración de la función y actúan como marcadores de posición 
para los valores que se pasarán cuando se invoque la función.
*/

function saludarPersona(nombre) {
  console.log(`Hola ${nombre}`);
}

// Funciones con dos o más parámetros, la cantidad de parámetros es infinita pero lo recomendable es que no supere de 3

function mensajeDosPalabras(palabra1, palabra2) {
  console.log(`${palabra1} ${palabra2}`);
}

mensajeDosPalabras("Hola", "Mundo", "Jose");

function sumarDosNumeros(numero1, numero2) {
  console.log(`El resultado de la suma de los dos números es: ${numero1 + numero2}`);
}

sumarDosNumeros(12, 20);
sumarDosNumeros(50, 20);

// Re asignamos el valor de una variable dentro de una función

let resultadoRestaDosNumeros = 0;

function restarDosNumeros(numero1, numero2) {
  resultadoRestaDosNumeros = numero1 - numero2;

  console.log(`El resultado de la resta de los dos números es: ${resultadoRestaDosNumeros}`);
}

restarDosNumeros(40, 30);

let nombre = "Juan";

function cambiarNombre(nuevoNombre) {
  nombre = nuevoNombre;
}

// Imprimimos el nombre de la variable con el valor original que es Juan
console.log(`El nombre original es ${nombre}`);

// Cambiamos el valor de la variable nombre dentro de la función llamando la función cambiarNombre
cambiarNombre("Ivan");

// Imprimimos el valor de nombre luego de cambiarlo en la función cambiarNombre
console.log(`El nuevo nombre es ${nombre}`);

function mostrarCabecera(titulo) {
  console.log("");
  console.log(`---------- ${titulo} ----------`);
}

console.log("");
console.log("---------- Funciones con retorno ----------");

/* 
Los retornos de las funciones en JavaScript son valores que una función devuelve como resultado de su ejecución. 
Las funciones pueden realizar cálculos, procesar datos o realizar cualquier tarea, y luego pueden retornar un valor 
o un objeto que se puede utilizar en otros lugares del programa. Los retornos de las funciones son fundamentales 
para que las funciones sean reutilizables y puedan comunicarse con otras partes del código.
*/


function sumar(num1, num2) {
    console.log(`Sumando ${num1} + ${num2} ...`);
    let suma =  num1 + num2;
    return suma;
  // El código que se ingrese luego del return no se va a ejecutar ya que, al momento de hacer el return sale de la función
    // console.log(suma);
}

console.log(sumar(15, 15));

let resultadoSuma = sumar(20,25);
console.log(resultadoSuma);

let resultadoSuma2 = sumar(2,25);
console.log(resultadoSuma2);

// Return con texto

function saludar(nombre) {
    return `Hola ${nombre}`;
}

console.log(saludar("Agostina"));

let saludoAPepe = saludar("Pepe");

console.log(saludoAPepe);

// Calculadora funciones + switch

function calculadora(num1, num2, operacion) {
    switch (operacion) {
        case "+":
          return num1 + num2;
        case "-":
          return num1 - num2;
        case "*":
          return num1 * num2;
        case "/":
          return num1 / num2;
        default:
          return 0;
      }
  }
  
console.log(`El resultado de la suma en calculadora es: ${calculadora(10, 5, "+")}`);
console.log(`El resultado de la resta en calculadora es: ${calculadora(10, 5, "-")}`);
console.log(`El resultado de la multiplicación en calculadora es: ${calculadora(10, 5, "*")}`);
console.log(`El resultado de la división en calculadora es: ${calculadora(10, 5, "/")}`);

let numero1 = parseInt(prompt("Ingrese un número"));
let numero2 = parseInt(prompt("Ingrese un número"));
let operacion = prompt("Ingrese el tipo de operación");

console.log(calculadora(numero1, numero2, operacion));



