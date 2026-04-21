import type { Pokemon } from "../types/Pokemon"

type PokemonInfoProps = {
    pokemon: Pokemon
}

export default function PokemonInfo({ pokemon }: PokemonInfoProps) {

    return (
        <>
            <h2>{pokemon.name}</h2>
            <ul>
                {pokemon.types.map(t => <li key={`${pokemon.name}-${t}`}>{t}</li>)}
            </ul>
            {
                pokemon.evoFrom &&
                <div>
                    <p>Evoluciona de:</p>
                    <p>{pokemon.evoFrom}</p>
                </div>
            }
        </>
    )
}