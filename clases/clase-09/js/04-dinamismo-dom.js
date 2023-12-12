const listaPaises = document.querySelector("#listaPaises");

let paises = [];

let nombrePais = prompt("Ingrese el nombre del País o Mostrar para salir");
paises.push(nombrePais);

while (nombrePais !== "Mostrar") {
  nombrePais = prompt("Ingrese el nombre del País o Mostrar para salir");
  paises.push(nombrePais);
}

paises.forEach((pais) => {
  let li = document.createElement("li");
  li.innerText = pais;
  listaPaises.appendChild(li);
});
