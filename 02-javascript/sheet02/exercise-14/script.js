function procesarNumero(numero, operacion) {
    if (typeof operacion === "function") {
        console.log(operacion(numero));
    }
}

procesarNumero(2, a => a * 2);
procesarNumero(2, a => a * 3);
procesarNumero(2, a => a < 0 ? "Negativo" : "Positivo");