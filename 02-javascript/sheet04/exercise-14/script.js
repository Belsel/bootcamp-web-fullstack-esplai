const numeros = [2, 5, 7, 3, 5, 8, 4, 4, 2, 5, 7, 8, 3];

const menorAMayor = [...numeros].sort((a, b) => a - b);
const mayorAMenor = [...numeros].sort((a, b) => b - a);

console.log(numeros, menorAMayor, mayorAMenor);  