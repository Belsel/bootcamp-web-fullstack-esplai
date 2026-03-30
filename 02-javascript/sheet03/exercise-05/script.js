const producto = {
    nombre: "Camisa",
    precio: 12.50,
    disponible: true
}

producto.precio = 10.99;
producto.disponible = false;
producto["categoria"] = "Textíl";
delete producto.nombre;

console.log(producto);