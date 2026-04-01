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

const productosIVA = productos.map(producto => {
    return {
        ...producto, precioConIVA: producto.precio * 1.21
    };
})


console.log(productos, productosIVA);