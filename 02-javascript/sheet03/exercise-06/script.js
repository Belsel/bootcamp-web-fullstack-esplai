const tecnologias = ["JavaScript", "Java", "Python", "React", "Spring Boot"];

for (tecnologia of tecnologias) {
    console.log(tecnologia);
}

for (let i = 0; i < tecnologias.length; ++i) {
    console.log(tecnologias[i]);
}

// Ambas son claras, 'for' utiliza el índice y 'for... of...' usa una referencia al objeto. así que depende de si necesito índice o no.