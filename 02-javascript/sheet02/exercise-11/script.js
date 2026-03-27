const curso = "JavaScript";
function mostrarCurso() {
    const mensaje = `Estás en el curso de ${curso}`;

    console.log(mensaje);
}
mostrarCurso();
// console.log(mensaje);

// Se puede acceder a curso desde la línea 8 pero no a mensaje porque el ámbito de mensaje es solo dentro de la función mostrarCurso.

if (true) {
    const pepito = "AAAA";
}

// console.log(pepito);