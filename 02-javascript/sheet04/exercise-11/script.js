const productos = [
    {
        nombre: "Coche",
        precio: 15000,
        cantidad: 1,
    },
    {
        nombre: "Cama",
        precio: 700,
        cantidad: 2,
    },
    {
        nombre: "Lavadora",
        precio: 800,
        cantidad: 5,
    }
]

const precio = productos.reduce((contador, producto) => contador + producto.precio * producto.cantidad, 0);

console.log(precio);