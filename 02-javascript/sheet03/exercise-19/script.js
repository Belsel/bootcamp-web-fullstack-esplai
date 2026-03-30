const objeto = {
  nombre: "Cosa",
  cantidad: 3,
};

const objeto2 = objeto;
objeto2.cantidad = 5;
objeto2.nombre = "otra cosa";

console.log(objeto2, objeto);
