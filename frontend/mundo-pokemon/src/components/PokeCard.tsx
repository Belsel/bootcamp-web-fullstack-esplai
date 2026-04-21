import type { Pokemon } from "../types/Pokemon";
import PokeImage from "./PokeImage";
import PokemonInfo from "./PokemonInfo";

type Props = {
    pokemon: Pokemon;
}

export default function PokeCard({ pokemon }: Props) {
    return (
        <>
            <article tabIndex={0} className="m-2 shadow-xl rounded-sm overflow-hidden border border-(--card-border-color) bg-(--card-background-color) transition-all focus-within:fixed focus-within:left-1/2 focus-within:top-1/2 focus-within:w-[min(240px, 95vw)] focus-within:max-h-[min(400px,95vh)]
        focus-within:-translate-x-1/2 focus-within:-translate-y-1/2
        focus-within:z-50 focus-within:border-2 focus-within:border-[#00d9ff]
        focus-within:shadow-[0_0_10px_rgb(0,153,255)]">
                <div className="pokemon-card relative h-62.5 max-h-62.5 overflow-hidden" >
                    <PokeImage pokemon={pokemon} />
                    <PokemonInfo pokemon={pokemon} />
                </div>
            </article>
        </>
    )
}