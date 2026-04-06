export default function pokemonData(pokemon, specie) {
  const formattedPokemon = {
    id: pokemon.id,
    name: pokemon.name,
    types: pokemon.types.map((type) => type.type.name),
    evoFrom: specie.evolves_from_species?.name ?? null,
    description: specie.flavor_text_entries[0]?.flavor_text,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${pokemon.id}.gif`,
    fallbackImg: pokemon.sprites.front_default,
  };
  return formattedPokemon;
}
