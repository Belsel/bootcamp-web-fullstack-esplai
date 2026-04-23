import { useParams } from "react-router"
import { usePokemon } from "../hooks/usePokemon";
import type { Pokemon } from "../types/Pokemon";
import { useEffect } from "react";

export default function PokemonInfoPage() {
    const { pokemon: pokemonName } = useParams();
    const { storedPokemon } = usePokemon();

    const pokemon: (Pokemon | null | undefined) = pokemonName ? storedPokemon.get(pokemonName) : null
    useEffect(() => {
        console.log(pokemon);
    }, [pokemon])

    return (
        <>
            <section className="fixed left-0 top-1/2">
                <p>Pokemon Info</p>
                <p>{pokemon?.name}</p>
            </section>
        </>
    )
}