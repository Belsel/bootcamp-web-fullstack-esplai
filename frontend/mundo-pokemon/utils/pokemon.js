import { TYPE_COLORS, TYPE_COLORS_SECONDARY } from "../types/typeColors.js";

export default function pokemonData(pokemon, specie) {
  const types = pokemon.types.map((type) => type.type.name);
  const typeColors = types.length === 1
    ? [TYPE_COLORS[types[0]], TYPE_COLORS_SECONDARY[types[0]]]
    : types.map((type) => TYPE_COLORS[type]);

  const formattedPokemon = {
    id: pokemon.id,
    name: pokemon.name,
    types,
    evoFrom: specie.evolves_from_species?.name ?? null,
    description: specie.flavor_text_entries[0]?.flavor_text,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${pokemon.id}.gif`,
    fallbackImg: pokemon.sprites.front_default,
    typeColors,
  };
  return formattedPokemon;
}
