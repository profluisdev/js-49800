const personas = [
  {
    nombre: "Juan",
    edad: 33,
    pais: "Argentina",
  },
  {
    nombre: "Hernan",
    edad: 23,
    pais: "Argentina",
  },
  {
    nombre: "Maria",
    edad: 22,
    pais: "Colombia",
  },
  {
    nombre: "Ana",
    edad: 38,
    pais: "Venezuela",
  },
  {
    nombre: "Ruben",
    edad: 29,
    pais: "Paraguay",
  },
];

let listaUsuarios = document.querySelector("#listaUsuarios");

personas.forEach((persona) => {
  let tarjeta = document.createElement("div");
  tarjeta.className = "border border-2 p-3 w-50 m-3 rounded-3";
  tarjeta.innerHTML = `
    <p>Nombre: ${persona.nombre}</p>
    <p>Edad: ${persona.edad}</p>
    <p>País: ${persona.pais}</p>
    `;
    listaUsuarios.appendChild(tarjeta);
});

