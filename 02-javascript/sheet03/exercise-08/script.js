const usuario = {
    nombre: "Juanito",
    edad: 32,
    direccion: {
        calle: "Calle la mancha",
        ciudad: "Valladolid",
        codigoPostal: 24012
    },
    intereses: ["Pasear", "Pintar", "Construir dioramas"]
}

console.log(usuario.direccion.ciudad);
console.log(usuario.intereses[0]);
usuario.direccion.codigoPostal = 29014;
usuario.intereses.push("Bicicleta");
console.log(usuario);