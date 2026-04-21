import { useInfiniteScroll } from "../hooks/useInfiniteScroll";
import { usePokemon } from "../hooks/usePokemon";
import { useSearch } from "../hooks/useSearch";
import type { Pokemon } from "../types/Pokemon";
import PokeCard from "./PokeCard";

export default function Pokedex() {
    const { search } = useSearch();
    const { storedPokemon, loadNextBatch, hasMore } = usePokemon(search);
    const { sentinelRef } = useInfiniteScroll({
        callback: loadNextBatch,
        hasMore: hasMore.current,
    });

    return (
        <>
            <p>Texto</p>
            {Array.from((storedPokemon.values())).map((entry: Pokemon | null) => {
                if (!entry) return;
                return <PokeCard key={entry.id} pokemon={entry} />
            })}
            <div ref={sentinelRef} />
        </>
    )
}