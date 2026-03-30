const cursos = [
    {
        titulo: "Matemáticas desde cero",
        duracion: 3,
        nivel: 1,
        activo: true
    },
    {
        titulo: "Programa con amor",
        duracion: 2,
        nivel: 3,
        activo: false
    },
    {
        titulo: "Biología marina",
        duracion: 5,
        nivel: 1,
        activo: true
    }
]

for (curso of cursos) {
    console.log(`El curso ${curso.titulo} dura ${curso.duracion} meses para estudiantes de nivel ${curso.nivel} en la materia y ahora mismo ${curso.activo ? "" : "no "}se encuentra disponible`)
}