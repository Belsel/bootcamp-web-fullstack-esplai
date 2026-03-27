function sumarHasta(numero) {
    let contador = 0;
    for (i = 1; i <= numero; ++i) {
        contador += i;
    }
    return contador;
}

console.log(sumarHasta(8));