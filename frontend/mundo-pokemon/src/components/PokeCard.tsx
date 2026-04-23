import { NavLink } from "react-router";
import type { Pokemon } from "../types/Pokemon";
import PokeImage from "./PokeImage";
import PokemonInfo from "./PokemonInfo";

type Props = {
    pokemon: Pokemon;
}

export default function PokeCard({ pokemon }: Props) {
    return (
        <>
            <div>
                <article tabIndex={0} className="m-2 shadow-xl pb-5 rounded-sm overflow-hidden border border-(--card-border-color) bg-(--card-background-color) transition-all focus-within:w-[min(240px, 95vw)]
        focus-within:z-50 focus-within:border-2 focus-within:border-[#00d9ff]
        focus-within:shadow-[0_0_10px_rgb(0,153,255)]">
                    <NavLink to={`/pokemon/${pokemon.name}`}>
                        <div className="pokemon-card relative h-62.5 max-h-62.5 overflow-hidden" >
                            <PokeImage pokemon={pokemon} />
                            <PokemonInfo pokemon={pokemon} />
                        </div>
                    </NavLink>
                </article>
            </div >
        </>
    )
}