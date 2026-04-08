import pokemonData from "../utils/pokemon.js";

export async function getPokemonById(id) {
  const POKEMON_URL = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const SPECIES_URL = `https://pokeapi.co/api/v2/pokemon-species/${id}/`;
  try {
    const pokeResponse = await fetch(POKEMON_URL);
    const pokeData = pokeResponse.ok ? await pokeResponse.json() : undefined;
    const speciesResponse = await fetch(SPECIES_URL);
    const specieData = speciesResponse.ok ? await speciesResponse.json() : undefined;
    return pokemonData(pokeData, specieData);
  }
  catch (error) {
    console.error(error);
  }
}

export async function getMaxPokemon() {
  const POKEMON_COUNT_URL = `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`;
  try {
    const response = await fetch(POKEMON_COUNT_URL);
    const data = response.ok ? await response.json() : undefined;
    return data.count;
  }
  catch (error) {
    console.error(error);
  }
}
