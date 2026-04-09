import pokemonData from "../utils/pokemon.js";

export async function getPokemonById(id) {
  const POKEMON_URL = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const SPECIES_URL = `https://pokeapi.co/api/v2/pokemon-species/${id}/`;
  const pokeResponse = await fetch(POKEMON_URL);
  const pokeData = await pokeResponse.json();
  const specieResponse = await fetch(SPECIES_URL);
  const specieData = await specieResponse.json();
  return pokemonData(pokeData, specieData);
}

export async function getPokemonList() {
  const POKEMON_COUNT_URL = `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`;
  const response = await fetch(POKEMON_COUNT_URL);
  const data = await response.json();
  const pokemonList = {
    maxPokemon: data.count,
    entries: data.results.map((pokemon) => {
      const id = pokemon.url.split("/").at(-2);
      return { id, name: pokemon.name };
    }),
  };
  console.log(pokemonList);
  return pokemonList;
}
