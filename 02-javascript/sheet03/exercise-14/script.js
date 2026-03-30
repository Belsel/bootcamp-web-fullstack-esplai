const numeros = [1, 2, 3, 4, 5];

const [primero, segundo, ...resto] = numeros;

const objeto = {
    nombre: "Perro",
    edad: 13,
    ciudad: "Málaga",
    empleado: false
}

const { nombre, ...propiedades } = objeto;