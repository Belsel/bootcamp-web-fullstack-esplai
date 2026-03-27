function validarParticipantes(numeroParticipantes) {
    if (typeof numeroParticipantes !== "number") return false;
    if (numeroParticipantes <= 0) return false;
    return true;
}

function crearTextoTurno(numeroTurno, mensajeBase) {
    return `turno ${numeroTurno}: ${mensajeBase}`;
}

function mostrarTurnos(numeroParticipantes, mensajeBase, operadorMensaje, turnoInicial = 1) {
    if (!validarParticipantes(numeroParticipantes)) return false;
    for (i = turnoInicial; i <= numeroParticipantes; ++i) {
        operadorMensaje(crearTextoTurno(i, mensajeBase));
    }
    return true;
}

mostrarTurnos(5, "comienza la práctica", t => console.log(`-- ${t} --`));
mostrarTurnos(5, "comienza la práctica", t => console.log(t.toUpperCase()), 4);
mostrarTurnos(5, "comienza la práctica", t => console.log(t.toUpperCase()), 2);