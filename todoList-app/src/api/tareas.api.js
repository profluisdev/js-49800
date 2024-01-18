
// Obtener todas las tareas - Método GET
const obtenerTareas = async () => {
    const resp = await fetch("http://localhost:3000/tareas");
    const data = await resp.json();
    console.log(data);
    return data;
}

// Obtener tarea por id - Método GET
const obtenerTareaPorId = async (id) => {
    const resp = await fetch(`http://localhost:3000/tareas/${id}`);
    const data = await resp.json();
    console.log(data);
    return data;
    
}
// Agregar una tarea - Método POST
const registrarTarea = async (tarea) => {
    const resp = await fetch("http://localhost:3000/tareas", {
        method: "POST",  // Indicamos que va a hacer una petición http POST
        body: JSON.stringify(tarea), // En body pasamos los datos que vamos a enviar al la base de datos y lo trasformamos a JSON
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    });
    const data = await resp.json();
    console.log(data);
    return data;
}

// Actualizar una tarea - Método PUT
const actualizarTarea = async (id, tarea) => {
    const resp = await fetch(`http://localhost:3000/tareas/${id}`, {
        method: "PUT",  // Indicamos que va a hacer una petición http PUT
        body: JSON.stringify(tarea), // En body pasamos los datos que vamos a enviar al la base de datos y lo trasformamos a JSON
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    });
    const data = await resp.json();
    console.log(data);
    return data;
}
// Eliminar una tarea - Método DELETE
const eliminarTareaPorId = async (id) => {
    const resp = await fetch(`http://localhost:3000/tareas/${id}`, {
        method: "DELETE",  // Indicamos que va a hacer una petición http DELETE
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    });
    const data = await resp.json();
    console.log(data);
    return data;
    
}

export default {
    obtenerTareas,
    obtenerTareaPorId,
    actualizarTarea,
    registrarTarea,
    eliminarTareaPorId
}