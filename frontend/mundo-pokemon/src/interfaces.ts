export interface PokemonListResponse {
    count: number,
    results: PokemonListEntry[];
}

export interface PokemonListEntry {
    name: string,
    id: number
}