const producto = {
  nombre: "DualSense 5 Controller",
  fabricante: {
    nombre: "SONY",
    direccion: "Avda. Diagonal 640 planta 4 A",
  },
};

const copia = {
  ...producto,
  nombre: "Turbo DualSense 5 Controller",
  fabricante: { ...producto.fabricante, nombre: "SONYA" },
};

console.log(producto, copia);
