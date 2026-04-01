const notas = [4, 3, 2, 4, 5, 7, 7, 2, 6, 8, 3, 7, 9, 2, 10, 3, 2, 1, 3, 0];

const haySuspensos = notas.some(nota => nota < 5);
console.log(haySuspensos);
const todosAprobados = notas.every(nota => nota >= 5);
console.log(todosAprobados);