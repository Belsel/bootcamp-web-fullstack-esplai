function crearContador(numeroDesde) {
    let contador = numeroDesde;
    return function () {
        return ++contador;
    }
}

const contador = crearContador(8);

console.log(contador());
console.log(contador());
console.log(contador());