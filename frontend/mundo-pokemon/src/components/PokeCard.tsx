import { useEffect } from "react";
import type { Pokemon } from "../types/Pokemon";

type Props = {
    pokemon: Pokemon;
}

export default function PokeCard({ pokemon }: Props) {

    useEffect(() => {
        console.log(`Carta: ${pokemon.name}`)
    }, [pokemon])

    return (
        <>
            <p>Carta</p>
            <p>{pokemon.name}</p>
            <img src={pokemon.img}></img>
        </>
    )
}