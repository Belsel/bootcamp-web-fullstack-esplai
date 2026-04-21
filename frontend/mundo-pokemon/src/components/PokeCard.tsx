import type { Pokemon } from "../types/Pokemon";
import PokeImage from "./PokeImage";
import PokemonInfo from "./PokemonInfo";

type Props = {
    pokemon: Pokemon;
}

export default function PokeCard({ pokemon }: Props) {
    return (
        <>
            <article className="shadow-2xl">
                <PokeImage pokemon={pokemon} />
                <PokemonInfo pokemon={pokemon} />
            </article>
        </>
    )
}