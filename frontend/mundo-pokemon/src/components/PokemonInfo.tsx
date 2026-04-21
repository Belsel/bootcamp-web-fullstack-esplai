import type { Pokemon } from "../types/Pokemon";

type PokemonInfoProps = {
    pokemon: Pokemon;
};

export default function PokemonInfo({ pokemon }: PokemonInfoProps) {
    return (
        <div className="p-3">
            <h2 className="text-xl capitalize font-ubuntu">{pokemon.name}</h2>

            <ul className="flex gap-1 mt-1">
                {pokemon.types.map((t) => (
                    <li
                        key={`${pokemon.name}-${t}`}
                        className="
              border border-[var(--card-type-border-color)]
              rounded-md px-1 py-[2px]
              text-[0.7rem] uppercase font-ubuntu
              text-[var(--card-type-color)]
            "
                    >
                        {t}
                    </li>
                ))}
            </ul>

            {pokemon.evoFrom && (
                <div className="border-l-4 border-[var(--card-evolution-border-color)] pl-2 mt-2 font-ubuntu">
                    <p className="text-sm text-[var(--card-evolution-text-color)]">
                        Evoluciona de:
                    </p>
                    <p className="text-lg text-[var(--card-evolution-name-color)] font-light">
                        {pokemon.evoFrom}
                    </p>
                </div>
            )}

            {/* BACK INFO */}
            <div className="hidden group-focus-within:flex flex-col mt-4">
                <h2 className="text-lg font-light text-[var(--card-evolution-text-color)]">
                    Pokedex
                </h2>
                <p className="text-[var(--card-evolution-name-color)] text-base">
                    {pokemon.description}
                </p>
            </div>
        </div>
    );
}
