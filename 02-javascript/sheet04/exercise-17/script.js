const productos = [
    {
        nombre: "Coche",
        precio: 15000
    },
    {
        nombre: "Cama",
        precio: 700
    }
]

const copiaProductos = productos.map(producto => { return { ...producto, precio: producto.precio * 0.8 } });

console.log(productos, copiaProductos);