export type Pokemon = {
    id: string,
    name: string,
    types: Array<string>,
    evoFrom: string,
    description: string,
    img: string,
    fallbackImg: string,
    typeColors: Array<string>
}

export const POKEMON_TYPES = [
    "normal",
    "fire",
    "water",
    "electric",
    "grass",
    "ice",
    "fighting",
    "poison",
    "ground",
    "flying",
    "psychic",
    "bug",
    "rock",
    "ghost",
    "dragon",
    "dark",
    "steel",
    "fairy"
] as const;

export type PokemonType = typeof POKEMON_TYPES[number];
