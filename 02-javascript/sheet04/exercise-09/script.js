const usuarios = [
    {
        nombre: "Pepito",
        activo: true
    },
    {
        nombre: "Juanito",
        activo: "false"
    }
]

const almenosUnoInactivo = usuarios.some(usuario => !usuario?.activo);
const todosActivos = usuarios.every(usuario => usuario?.activo);

console.log(almenosUnoInactivo, todosActivos);