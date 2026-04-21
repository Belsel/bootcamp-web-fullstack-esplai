import type { PokemonListResponse } from "../interfaces.js";
import type { Pokemon, PokemonType } from "../types/Pokemon";
import { TYPE_COLOR_MAP } from "../types/typeColors"

interface PokemonResult {
  name: string,
  url: string
}

export async function getPokemon(id: number | string) {
  const POKEMON_URL = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const SPECIES_URL = `https://pokeapi.co/api/v2/pokemon-species/${id}/`;
  try {
    const pokeResponse = await fetch(POKEMON_URL);
    const pokeData = pokeResponse.ok ? await pokeResponse.json() : undefined;
    const speciesResponse = await fetch(SPECIES_URL);
    const specieData = speciesResponse.ok
      ? await speciesResponse.json()
      : undefined;
    const types: PokemonType[] = pokeData.types.map((type: { type: { name: string } }) => type.type.name);
    const formatedData: Pokemon = {
      id: pokeData.id,
      name: pokeData.name,
      types: types,
      evoFrom: specieData?.evolves_from_species?.name ?? null,
      description: specieData?.flavor_text_entries?.find((entry: { flavor_text: string, language: { name: string } }) => entry.language.name === "es")?.flavor_text.replace(/\f/g, " ") ?? null,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${pokeData.id}.gif`,
      fallbackImg: pokeData.sprites.front_default,
      typeColors: types.length === 1 ? [TYPE_COLOR_MAP[types[0]].primary, TYPE_COLOR_MAP[types[0]].secondary] : types.map(type => TYPE_COLOR_MAP[type].primary)
    }
    return formatedData;

  }
  catch (error) {
    console.error(error);
  }
}

export async function getPokemonList(): Promise<PokemonListResponse> {
  const POKEMON_COUNT_URL = `https://pokeapi.co/api/v2/pokemon?limit=-1&offset=0`;
  try {
    const response = await fetch(POKEMON_COUNT_URL);
    const data = await response.json();
    const pokemonList: PokemonListResponse = {
      count: data.count,
      results: data.results.map((pokemon: PokemonResult) => {
        const id = pokemon.url.split("/").at(-2);
        return { id, name: pokemon.name };
      }),
    };
    console.log(pokemonList);
    return pokemonList;
  } catch (error) {
    console.error(error);
    return { count: -1, results: [] }
  }
}
