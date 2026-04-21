import type { Pokemon } from "../types/Pokemon"

type PokeImageProps = {
    pokemon: Pokemon
}

export default function PokeImage({ pokemon }: PokeImageProps) {

    const handleImgError = (e: React.SyntheticEvent<HTMLImageElement>) => {
        e.currentTarget.src = pokemon.fallbackImg;
    }

    return (
        <>
            <figure>
                <img src={pokemon.img} onError={handleImgError} />
                <figcaption>ID / {pokemon.id}</figcaption>
            </figure>
        </>
    )
}