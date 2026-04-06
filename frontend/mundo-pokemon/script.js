import { getPokemonById, getMaxPokemon } from "./services/getPokemon.js";

const grid = document.getElementById("pokedexgrid");
const BATCH_SIZE = 21;
let currentOffset = 1;
let maxPokemon = 0;
let loading = false;

function createCard(data) {
  // Article
  const element = document.createElement("article");
  element.id = `pokemon-${data.id}`;

  // Outer div
  const outerDiv = document.createElement("div");
  outerDiv.classList.add("pokemon-card");
  outerDiv.tabIndex = 0;
  element.append(outerDiv);

  outerDiv.append(createPokemonFigure(data));
  outerDiv.append(createInfoDiv(data));
  outerDiv.append(createBackInfo(data));

  return element;
}

function createPokemonFigure(data) {
  // Figure
  const figure = document.createElement("figure");

  // Img
  const frontImg = document.createElement("img");
  frontImg.src = data.img;
  frontImg.alt = data.name;

  frontImg.onerror = () => {
    frontImg.src = data.fallbackImg;
  };

  figure.append(frontImg);

  // Fig caption
  const figCaption = document.createElement("figcaption");
  figCaption.textContent = `ID / ${data.id}`;

  if (data.typeColors.length === 1) {
    figure.style.setProperty("--type-color-1", data.typeColors[0]);
    figure.style.setProperty("--type-color-2", data.typeColors[0]);
  } else {
    figure.style.setProperty("--type-color-1", data.typeColors[0]);
    figure.style.setProperty("--type-color-2", data.typeColors[1]);
  }

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
  nameTitle.classList.add("pokemon-name");
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
    pokeType.textContent = type;
    pokeType.dataset.type = type;
    typeContainer.append(pokeType);
  });

  return typeContainer;
}

function createEvo(data) {
  const evoDiv = document.createElement("div");
  evoDiv.classList.add("evolution-info");

  const evoText = document.createElement("p");
  evoText.classList.add("evolution-text");
  evoText.textContent = "Evoluciona de:";
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

async function init() {
  maxPokemon = await getMaxPokemon();
  loadNextBatch();
  setupInfiniteScroll();
}

async function loadNextBatch() {
  if (loading) return;
  loading = true;

  const end = Math.min(currentOffset + BATCH_SIZE - 1, maxPokemon);
  const promises = [];

  for (let i = currentOffset; i <= end; ++i) {
    promises.push(getPokemonById(i));
  }

  const results = await Promise.all(promises);

  results.sort((a, b) => a.id - b.id);

  const fragment = new DocumentFragment();

  results.forEach((pokemon) => {
    fragment.append(createCard(pokemon));
  });

  grid.append(fragment);

  currentOffset = end + 1;
  loading = false;
}

function setupInfiniteScroll() {
  const sentinel = document.getElementById("scroll-sentinel");

  const observer = new IntersectionObserver((entries) => {
    const entry = entries[0];
    if (entry.isIntersecting && currentOffset <= maxPokemon) {
      loadNextBatch();
    }
  });

  observer.observe(sentinel);
}

init();
