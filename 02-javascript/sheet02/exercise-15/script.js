function aplicarOperacion(a, b, operacion) {
    if (typeof operacion === "function") {
        console.log(operacion(a, b));
    }
}

aplicarOperacion(2, 3, (a, b) => a * b);
aplicarOperacion(2, 3, (a, b) => a + b);
aplicarOperacion(2, 3, (a, b) => a - b);