const nombreProducto = "Limón";
const precioUnitario = 2.5;
const cantidad = 3;
const costeEnvio = 6.99;

const subTotal = cantidad * precioUnitario;
const total = subTotal + costeEnvio;

console.log(`Has comprado ${cantidad} unidad${cantidad !== 1 ? 'es' : ''} de "${nombreProducto}". Subtotal: ${subTotal} €. Envío: ${costeEnvio} €. Total: ${total} €. `)