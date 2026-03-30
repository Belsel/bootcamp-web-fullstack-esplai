const alumno = {
    nombre: "Pedro",
    edad: 34,
    grupo: "A",
    activo: true
}

const { nombre, grupo: letra, idioma = "Inglés" } = alumno;

console.log(nombre, letra, idioma);