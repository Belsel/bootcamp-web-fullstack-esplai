import { getPokemonById, getPokemonList } from "./services/getPokemon.js";

const grid = document.getElementById("pokedexgrid");
const BATCH_SIZE = 22;
let currentOffset = 0;
let pokemonList;
let pokemonData;
let currentSearch;
let loading = false;
let observer = null;

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
  await getPokemonData();
  currentSearch = pokemonList.entries.map((entry) => entry.name);
  setupSearch();
  loadNextBatch();
  setupInfiniteScroll();
}

async function loadNextBatch() {
  if (loading) return;
  loading = true;

  const end = Math.min(currentOffset + BATCH_SIZE, currentSearch.length);

  const promises = [];

  for (let i = currentOffset; i < end; ++i) {
    const name = currentSearch[i].toLowerCase();

    if (pokemonData.has(name) && pokemonData.get(name) !== null) {
      insertCardSorted(pokemonData.get(name));
      continue;
    }

    const pokemonInfo = pokemonList.entries.find(
      (pokemon) => pokemon.name === name,
    );

    if (!pokemonInfo) continue;

    promises.push(
      getPokemonById(pokemonInfo.id).then((pokemon) => {
        pokemonData.set(pokemon.name, pokemon);
        insertCardSorted(pokemon);
      }),
    );
  }

  // No esperamos a que terminen para pintar, solo para liberar loading
  await Promise.allSettled(promises);

  localStorage.setItem("pokemonData", JSON.stringify([...pokemonData]));

  currentOffset = end;
  loading = false;
}

function setupInfiniteScroll() {
  const sentinel = document.getElementById("scroll-sentinel");

  observer = new IntersectionObserver((entries) => {
    const entry = entries[0];
    if (entry.isIntersecting && currentOffset < currentSearch.length) {
      loadNextBatch();
    }
  });

  observer.observe(sentinel);
}

async function getPokemonData() {
  const localList = localStorage.getItem("pokemonList");
  pokemonList = localList ? JSON.parse(localList) : await getPokemonList();

  localList ?? localStorage.setItem("pokemonList", JSON.stringify(pokemonList));

  const localData = localStorage.getItem("pokemonData");
  if (localData) {
    pokemonData = new Map(JSON.parse(localData));
  } else {
    pokemonData = new Map(
      pokemonList.entries.map((entry) => [entry.name, null]),
    );
  }
  localStorage.setItem("pokemonData", JSON.stringify([...pokemonData]));
}

function setupSearch() {
  const input = document.getElementById("search-pokemon");
  const form = document.getElementById("search-form");

  form.addEventListener("submit", (e) => {
    const query = input.value.trim().toLowerCase();
    e.preventDefault();
    filter(query);
  });

  input.addEventListener("input", (_) => {
    const query = input.value.trim().toLowerCase();
    filter(query);
  });
}

function filter(query) {
  if (observer) observer.disconnect();
  currentOffset = 0;
  grid.innerHTML = "";

  currentSearch = pokemonList.entries.map((entry) => entry.name);
  if (query !== "")
    currentSearch = currentSearch.filter((name) => name.includes(query));
  loadNextBatch().then(() => {
    setupInfiniteScroll();
  });
}

init();

function insertCardSorted(pokemon) {
  const newCard = createCard(pokemon);
  const newId = pokemon.id;

  const cards = [...grid.children];

  const nextCard = cards.find((card) => {
    const cardId = Number(card.id.replace("pokemon-", ""));
    return cardId > newId;
  });

  if (nextCard) {
    grid.insertBefore(newCard, nextCard);
  } else {
    grid.appendChild(newCard);
  }
}
