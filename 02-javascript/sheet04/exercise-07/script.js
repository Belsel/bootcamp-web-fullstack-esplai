const productos = [
    {
        id: 1,
        nombre: "Coche",
        precio: 15000
    },
    {
        id: 2,
        nombre: "Cama",
        precio: 700
    },
    {
        id: 3,
        nombre: "Lavadora",
        precio: 800
    }
]

const cama = productos.find(producto => producto?.id === 2);
console.log(cama);
const mesa = productos.find(producto => producto?.id === 4);
console.log(mesa);