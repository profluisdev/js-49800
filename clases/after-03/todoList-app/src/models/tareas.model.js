

export const crearTarea = (texto) => {
    let nuevaTarea = {
        id: Date.now().toString(36),
        data: texto,
        realizado: false
    }

    return nuevaTarea;
}

// export class Tarea {
//     constructor(texto) {
//         this.id = Date.now().toString(36);
//         this.data = texto;
//         this.realizado = false;
//     }   
// }

