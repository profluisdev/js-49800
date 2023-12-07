console.log("");
console.log("---------- La Clase Date ----------");

/* 
Seguramente en algún momento necesitemos manipular fechas dentro de los datos que manejamos. 
Para esto, JavaScript posee la clase Date diseñada para representar fechas.
*/

console.log(new Date());

/* 
La convención con la que trabaja Javascript para construir fechas cuenta los meses a partir del 0 (0 = enero, 11 = diciembre) 
y los días a partir del 1 lunes = 1 y domingo = 7
*/

console.log(new Date(2020, 2, 15));

/* 
El constructor de la clase Date nos permite crear objetos date con fechas diferentes. 
Puede recibir parámetros en el orden año, mes, día, hora, minutos, segundos, milisegundos (todos tipo number).
*/

const casiNavidad = new Date(2023, 11, 24, 23, 59, 59);
console.log(casiNavidad);

// Métodos que devuelven valores singulares

const hoy = new Date();

// Obtenemos el mes entre 0 y 11 recordando que enero es 0 y diciembre 11 
console.log(hoy.getMonth());

// Obtenemos el año en números ej: 2023
console.log(hoy.getFullYear());

// Obtenemos el día entre 1 y 7 recordando que el lunes es 1 y domingo 7
console.log(hoy.getDay())

// Mes día y año 
console.log(hoy.toDateString())

// Mes día y año en formato fecha y la hora 
console.log(hoy.toLocaleString())

// Mes día y año en formato fecha 
console.log(hoy.toLocaleDateString())

// Hora 
console.log(hoy.toTimeString())

// El método split() en JavaScript se utiliza para dividir una cadena en un array de subcadenas según un delimitador especificado

let mensaje = "Hola Mundo, este es otro mensaje";

console.log(mensaje.split(" "));
console.log(mensaje.split(","));

let horario = new Date().toTimeString().split(":")
console.log(horario[0])

if(parseInt(horario[0]) <= 17) {
    console.log("Happy Hour promociones 2x1 pagas dos y te llevas uno");
} else {
    console.log("No hay promoción en este horario");
}