import { useInfiniteScroll } from "../hooks/useInfiniteScroll";
import { usePokemon } from "../hooks/usePokemon";
import { useSearch } from "../hooks/useSearch";
import type { Pokemon } from "../types/Pokemon";
import PokeCard from "./PokeCard";

export default function Pokedex() {
    const { search } = useSearch();
    const { storedPokemon, loadNextBatch, hasMore, filtered } = usePokemon(search);
    const { sentinelRef } = useInfiniteScroll({
        callback: loadNextBatch,
        hasMore: hasMore.current,
    });

    return (
        <>
            <section>


                <div className="grid grid-cols-3">
                    {filtered.map(name => storedPokemon.get(name))
                        .filter((p): p is Pokemon => p !== null && p !== undefined)
                        .sort((a, b) => Number(a.id) - Number(b.id))
                        .map((entry) => <PokeCard key={entry.id} pokemon={entry} />)}
                    <div ref={sentinelRef} />
                </div>
            </section>
        </>
    )
}