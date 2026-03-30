const arreglo = [
  {
    titulo: "La princesa prometida",
    precio: 23.5,
    genero: ["Aventura", "Comedia", "Romance"],
  },
  {
    nombre: "Pasar el aspirador",
    tiempo: "15 minutos",
  },
  {
    titulo: "Ratchet & Clank",
    anno: "2001",
    genero: "Aventura",
  },
];

const json = JSON.stringify(arreglo);
const reconstruido = JSON.parse(json);
console.log(reconstruido[0]);
