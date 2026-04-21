import { usePokemon } from "../hooks/usePokemon";
import { useSearch } from "../hooks/useSearch";
import type { Pokemon } from "../types/Pokemon";
import PokeCard from "./PokeCard";

export default function Pokedex() {
    const { search } = useSearch();
    const { storedPokemon, loadNextBatch } = usePokemon(search);

    return (
        <>
            <p>Texto</p>
            {Array.from((storedPokemon.values())).map((entry: Pokemon | null) => {
                if (!entry) return;
                return <PokeCard key={entry.id} pokemon={entry} />
            })}
        </>
    )
}