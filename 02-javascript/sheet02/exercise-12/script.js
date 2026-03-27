
function sumarHasta(numeroHasta) {
    let contador = 0;
    for (i = 1; i <= numeroHasta; i++) {
        contador = contador + i;
    }
    return contador;
}
console.log(sumarHasta(5));