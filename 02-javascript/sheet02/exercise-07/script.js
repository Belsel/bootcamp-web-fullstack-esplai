function esPar(numero) {
    return numero % 2 === 0;
}

function comprobador() {
    const numeros = [2, 4, 6, 7, 8];
    for (numero of numeros) {
        console.log(esPar(numero));
    }
}

comprobador();