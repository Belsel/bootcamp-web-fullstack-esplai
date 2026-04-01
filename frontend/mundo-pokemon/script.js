const pokemonData = [
    {
        id: 1,
        name: "bulbasaur",
        types: ["planta", "veneno"],
        evoFrom: null,
        description: "Después de nacer, crece alimentándose de las semillas de su lomo."
    },
    {
        id: 2,
        name: "ivysaur",
        types: ["planta", "veneno"],
        evoFrom: "bulbasaur",
        description: "Cuando el capullo de su lomo se hincha, desprende un dulce aroma para indicar el florecimiento."
    },
    {
        id: 3,
        name: "venusaur",
        types: ["planta", "veneno"],
        evoFrom: "ivysaur",
        description: "Después de un día de lluvia, la flor de su lomo tiene un aroma más potente y atrae a otros Pokémon."
    },
    {
        id: 4,
        name: "charmander",
        types: ["fuego"],
        evoFrom: null,
        description: "La llama de la punta de su cola indica su salud. Si Charmander está sano, arderá con más fuerza."
    },
    {
        id: 5,
        name: "charmeleon",
        types: ["fuego"],
        evoFrom: "charmander",
        description: "En las montañas rocosas donde viven los Charmeleon, sus colas ardientes brillan como estrellas."
    },
    {
        id: 6,
        name: "charizard",
        types: ["fuego", "volador"],
        evoFrom: "charmeleon",
        description: "Se dice que el fuego de Charizard arde con más fuerza si ha vivido duras batallas."
    },
    {
        id: 7,
        name: "squirtle",
        types: ["agua"],
        evoFrom: null,
        description: "Se protege con su caparazón y luego contraataca lanzando agua a presión cuando tiene oportunidad."
    },
    {
        id: 8,
        name: "wartortle",
        types: ["agua"],
        evoFrom: "squirtle",
        description: "Se dice que vive 10.000 años. Su peluda cola es un símbolo de longevidad."
    },
    {
        id: 9,
        name: "blastoise",
        types: ["agua"],
        evoFrom: "wartortle",
        description: "Los chorros de agua que lanza por los tubos de su caparazón pueden atravesar el acero."
    }
]

const grid = document.getElementById("pokedexgrid");

for (let i = 0; i < pokemonData.length; ++i) {
    // Article
    const element = document.createElement("article");
    element.id = pokemonData[i].id;
    grid.append(element);

    // Outer div
    const outerDiv = document.createElement("div");
    outerDiv.classList.add("pokemon-card");
    outerDiv.tabIndex = 0;
    element.append(outerDiv);

    // Figure
    const figure = document.createElement("figure");
    outerDiv.append(figure);

    // Img
    const frontImg = document.createElement("img");
    frontImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemonData[i].id}.gif`;
    frontImg.alt = pokemonData[i].name;
    figure.append(frontImg);

    // Fig caption
    const figCaption = document.createElement("figcaption");
    figCaption.textContent = `ID / ${pokemonData[i].id}`;
    figure.append(figCaption);

    // Info div
    const infoDiv = document.createElement("div");
    infoDiv.classList.add("pokemon-info");
    outerDiv.append(infoDiv);

    // Name title
    const nameTitle = document.createElement("h2");
    nameTitle.textContent = pokemonData[i].name;
    nameTitle.classList.add("pokemon-name")
    infoDiv.append(nameTitle);

    if (pokemonData[i].types !== null) {
        // Type container
        const typeContainer = document.createElement("ul");
        typeContainer.classList.add("type-container");
        infoDiv.append(typeContainer);

        // Type
        pokemonData[i].types.forEach((type) => {
            const pokeType = document.createElement("li");
            pokeType.type = type;
            pokeType.textContent = type;
            typeContainer.append(pokeType);
        })
    }

    if (pokemonData[i].evoFrom !== null) {
        const evoDiv = document.createElement("div");
        evoDiv.classList.add("evolution-info");
        infoDiv.append(evoDiv);

        const evoText = document.createElement("p");
        evoText.classList.add("evolution-text");
        evoText.textContent = "Evoluciona de:"
        evoDiv.append(evoText);

        const evoName = document.createElement("p");
        evoName.classList.add("evolution-name");
        evoName.textContent = pokemonData[i].evoFrom;
        evoDiv.append(evoName);

    }

    // Back info div
    const backInfoDiv = document.createElement("div");
    backInfoDiv.classList.add("pokemon-back-info");
    outerDiv.append(backInfoDiv);

    // Pokedex title
    const pokedexTitle = document.createElement("h2");
    pokedexTitle.textContent = "Pokedex";
    backInfoDiv.append(pokedexTitle);

    // Pokedex description
    const pokedexDescription = document.createElement("p");
    pokedexDescription.innerText = pokemonData[i].description;
    backInfoDiv.append(pokedexDescription);

}