
const chequeoRespuesta = (respuestaCorrecta, pregunta) => {
    let respuesta = prompt(pregunta).toLowerCase();
  
    while (respuesta !== "no" && respuesta !== "si") {
      alert("Respuesta invalida debe contestar pro si o por no");
      respuesta = prompt(pregunta).toLowerCase();
    }
  
    if (respuesta === respuestaCorrecta) {
      alert("Respuesta correcta");
    } else {
      alert("Respuesta incorrecta");
    }
  };

  
for (let i = 0; i <= 3; i++) {
  let pregunta;
  let respuestaCorrecta;

  switch (i) {
    case 1:
      pregunta = "Por si o por no.¿La milanesa de carne es mejor que la de pollo?";
      respuestaCorrecta = "si";
      chequeoRespuesta(respuestaCorrecta, pregunta);
      break;
    case 2:
      pregunta = "Por si o por no.¿La milanesa es mejo con limón?";
      respuestaCorrecta = "si";
      chequeoRespuesta(respuestaCorrecta, pregunta);
      break;
    case 3:
      pregunta = "Por si o por no.¿El fernet tiene que se Branca?";
      respuestaCorrecta = "si";
      chequeoRespuesta(respuestaCorrecta, pregunta);
      break;
    default:
      alert("Encuesta de preguntas por si o por no");
      break;
  }
}

