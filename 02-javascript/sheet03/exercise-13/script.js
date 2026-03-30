const producto = {
    nombre: "Crema",
    precio: 12.50,
    stock: 3
}

const productoAlternativo = { ...producto };
productoAlternativo.precio = 10.99;
productoAlternativo["disponible"] = true;
console.log(producto, productoAlternativo);