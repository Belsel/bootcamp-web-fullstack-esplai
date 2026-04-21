import { useEffect } from "react";
import type { Pokemon } from "../types/Pokemon";
import PokeImage from "./PokeImage";

type Props = {
    pokemon: Pokemon;
}

export default function PokeCard({ pokemon }: Props) {

    useEffect(() => {
        console.log(`Carta: ${pokemon.name}`)
    }, [pokemon])

    return (
        <>
            <PokeImage pokemon={pokemon} />
        </>
    )
}