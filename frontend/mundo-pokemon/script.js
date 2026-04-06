import { getPokemonById, getMaxPokemon } from "./services/getPokemon.js";
// const pokemonData = [
//     {
//         id: 1,
//         name: "bulbasaur",
//         types: ["planta", "veneno"],
//         evoFrom: null,
//         description: "Después de nacer, crece alimentándose de las semillas de su lomo."
//     },
//     {
//         id: 2,
//         name: "ivysaur",
//         types: ["planta", "veneno"],
//         evoFrom: "bulbasaur",
//         description: "Cuando el capullo de su lomo se hincha, desprende un dulce aroma para indicar el florecimiento."
//     },
//     {
//         id: 3,
//         name: "venusaur",
//         types: ["planta", "veneno"],
//         evoFrom: "ivysaur",
//         description: "Después de un día de lluvia, la flor de su lomo tiene un aroma más potente y atrae a otros Pokémon."
//     },
//     {
//         id: 4,
//         name: "charmander",
//         types: ["fuego"],
//         evoFrom: null,
//         description: "La llama de la punta de su cola indica su salud. Si Charmander está sano, arderá con más fuerza."
//     },
//     {
//         id: 5,
//         name: "charmeleon",
//         types: ["fuego"],
//         evoFrom: "charmander",
//         description: "En las montañas rocosas donde viven los Charmeleon, sus colas ardientes brillan como estrellas."
//     },
//     {
//         id: 6,
//         name: "charizard",
//         types: ["fuego", "volador"],
//         evoFrom: "charmeleon",
//         description: "Se dice que el fuego de Charizard arde con más fuerza si ha vivido duras batallas."
//     },
//     {
//         id: 7,
//         name: "squirtle",
//         types: ["agua"],
//         evoFrom: null,
//         description: "Se protege con su caparazón y luego contraataca lanzando agua a presión cuando tiene oportunidad."
//     },
//     {
//         id: 8,
//         name: "wartortle",
//         types: ["agua"],
//         evoFrom: "squirtle",
//         description: "Se dice que vive 10.000 años. Su peluda cola es un símbolo de longevidad."
//     },
//     {
//         id: 9,
//         name: "blastoise",
//         types: ["agua"],
//         evoFrom: "wartortle",
//         description: "Los chorros de agua que lanza por los tubos de su caparazón pueden atravesar el acero."
//     }
// ]

const pokemonData = [];
const MAX_POKEMON = 386;

const grid = document.getElementById("pokedexgrid");

function loadCards(data, grid) {
    grid.innerHTML = "";
    for (let i = 0; i < data.length; ++i) {
        createCard(data[i], grid);
    }
}

function createCard(data, grid) {
    // Article
    const element = document.createElement("article");
    element.id = data.id;
    grid.append(element);

    // Outer div
    const outerDiv = document.createElement("div");
    outerDiv.classList.add("pokemon-card");
    outerDiv.tabIndex = 0;
    element.append(outerDiv);

    outerDiv.append(createPokemonFigure(data));
    outerDiv.append(createInfoDiv(data));
    outerDiv.append(createBackInfo(data));
}

function createPokemonFigure(data) {
    // Figure
    const figure = document.createElement("figure");

    // Img
    const frontImg = document.createElement("img");
    frontImg.src = data.img;
    frontImg.alt = data.name;
    figure.append(frontImg);

    // Fig caption
    const figCaption = document.createElement("figcaption");
    figCaption.textContent = `ID / ${data.id}`;
    figure.append(figCaption);

    return figure;
}

function createInfoDiv(data) {
    // Info div
    const infoDiv = document.createElement("div");
    infoDiv.classList.add("pokemon-info");

    // Name title
    const nameTitle = document.createElement("h2");
    nameTitle.textContent = data.name;
    nameTitle.classList.add("pokemon-name")
    infoDiv.append(nameTitle);

    if (data.types !== null) {
        infoDiv.append(createTypes(data));
    }

    if (data.evoFrom !== null) {
        infoDiv.append(createEvo(data));
    }

    return infoDiv;
}

function createTypes(data) {
    // Type container
    const typeContainer = document.createElement("ul");
    typeContainer.classList.add("type-container");

    // Type 
    data.types.forEach((type) => {
        const pokeType = document.createElement("li");
        pokeType.type = type;
        pokeType.textContent = type;
        typeContainer.append(pokeType);
    })

    return typeContainer;
}

function createEvo(data) {
    const evoDiv = document.createElement("div");
    evoDiv.classList.add("evolution-info");

    const evoText = document.createElement("p");
    evoText.classList.add("evolution-text");
    evoText.textContent = "Evoluciona de:"
    evoDiv.append(evoText);

    const evoName = document.createElement("p");
    evoName.classList.add("evolution-name");
    evoName.textContent = data.evoFrom;
    evoDiv.append(evoName);

    return evoDiv;
}

function createBackInfo(data) {
    // Back info div
    const backInfoDiv = document.createElement("div");
    backInfoDiv.classList.add("pokemon-back-info");

    // Pokedex title
    const pokedexTitle = document.createElement("h2");
    pokedexTitle.textContent = "Pokedex";
    backInfoDiv.append(pokedexTitle);

    // Pokedex description
    const pokedexDescription = document.createElement("p");
    pokedexDescription.innerText = data.description;
    backInfoDiv.append(pokedexDescription);

    return backInfoDiv;
}

async function loadData(amount) {
    console.log(`Pibes: ${amount}`);
    for (let i = 1; i <= amount; ++i) {
        const pokemon = await getPokemonById(i);
        pokemonData.push(pokemon);
        loadCards(pokemonData, grid);
    }
}

async function init() {
    const amount = await getMaxPokemon();
    await loadData(amount);
}

init();