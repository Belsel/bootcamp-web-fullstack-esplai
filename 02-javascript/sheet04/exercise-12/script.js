const notas = [1, 4, 6, 3, 5, 7, 4, 5, 6, 8, 6, 3, 6, 8, 4, 7, 6, 4, 2, 7];
const aprobadas = notas.reduce((contador, nota) => contador + (nota >= 5), 0);
console.log(aprobadas);