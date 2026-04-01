const tareas = [
    {
        titulo: "A",
        completada: true,
        prioridad: "baja"
    },
    {
        titulo: "B",
        completada: false,
        prioridad: "alta"
    },
    {
        titulo: "C",
        completada: true,
        prioridad: "alta"
    }
]

const completadas = tareas.filter(tarea => tarea?.completada);
const altaPrioridad = tareas.filter(tarea => tarea?.prioridad === "alta");

console.log(completadas, altaPrioridad);