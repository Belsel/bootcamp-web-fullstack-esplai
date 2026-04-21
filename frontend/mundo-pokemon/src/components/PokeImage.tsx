import { useState } from "react";
import type { Pokemon } from "../types/Pokemon";

type PokeImageProps = {
    pokemon: Pokemon;
};

export default function PokeImage({ pokemon }: PokeImageProps) {
    const [imgSrc] = useState(pokemon.img);

    return (
        <figure
            className="
        relative flex flex-col min-h-32.5 overflow-hidden
        bg-(--card-figure-background-color)
        transition-all group
      "
            style={{
                ["--type-color-1" as string]: pokemon.typeColors[0],
                ["--type-color-2" as string]: pokemon.typeColors[1] ?? pokemon.typeColors[0],
            }}
        >
            <div
                className="
          absolute inset-0 opacity-0 pointer-events-none
          group-hover:opacity-60 group-focus-within:opacity-60
          animate-star-drift
        "
                style={{
                    backgroundImage: `
            radial-gradient(circle, color-mix(in srgb, var(--type-color-1) 70%, white) 1px, transparent 2px),
            radial-gradient(circle, color-mix(in srgb, var(--type-color-1) 70%, white) 1px, transparent 2px),
            radial-gradient(circle, color-mix(in srgb, var(--type-color-2) 70%, white) 1px, transparent 2px),
            radial-gradient(circle, color-mix(in srgb, var(--type-color-1) 60%, white) 2px, transparent 3px),
            radial-gradient(circle, color-mix(in srgb, var(--type-color-2) 60%, white) 2px, transparent 3px),
            radial-gradient(circle, color-mix(in srgb, var(--type-color-1) 80%, white) 1px, transparent 4px),
            radial-gradient(circle, color-mix(in srgb, var(--type-color-2) 80%, white) 1px, transparent 4px),
            radial-gradient(circle, color-mix(in srgb, var(--type-color-1) 75%, white) 1px, transparent 3px)
          `,
                    backgroundSize: `
            60px 60px,
            80px 80px,
            50px 50px,
            110px 110px,
            40px 40px,
            90px 90px,
            70px 70px,
            130px 130px
          `,
                }}
            />

            <div
                className="
          absolute inset-0 opacity-0
          group-hover:opacity-100 group-focus-within:opacity-100
          animate-move-gradient
        "
                style={{
                    backgroundImage: `
            linear-gradient(160deg, rgba(255,255,255,0.5) 0%, transparent 20%),
            linear-gradient(
              165deg,
              var(--type-color-1) 45%,
              var(--type-color-2) 70%,
              var(--type-color-2) 75%,
              var(--type-color-1) 95%
            )
          `,
                }}
            />

            <img
                src={imgSrc}
                alt={pokemon.name}
                onError={(e) => (e.currentTarget.src = pokemon.fallbackImg)}
                className="
          absolute left-1/2 top-1/2
          -translate-x-1/2 -translate-y-1/2
          transition-transform duration-700 ease-out
          group-hover:scale-[2] group-hover:-translate-y-[20%]
        "
            />

            <figcaption
                className="
          absolute left-0 bottom-0 px-2 py-1 text-xs font-bold
          bg-(--card-id-background) text-(--card-id-color)
          font-ubuntu
        "
            >
                ID / {pokemon.id}
            </figcaption>
        </figure>
    );
}
