function addToArray(array, element) {
    return [...array].push(element)
}

function addToMyArray(element) {
    notas.push(element);
}

const notas = [1, 2, 3];
console.log(notas);
addToArray(notas, 4);
console.log(notas);
addToMyArray(5);

console.log(notas);