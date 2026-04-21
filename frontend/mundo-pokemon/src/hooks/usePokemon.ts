import { useEffect, useRef, useState } from "react";
import type { Pokemon } from "../types/Pokemon";
import { getPokemon, getPokemonList } from "../services/getPokemon";
import type { PokemonListResponse, PokemonListEntry } from "../interfaces";

const BATCH_SIZE: number = 21;

export function usePokemon(searchedPokemon: string) {
    const [pokemonList, setPokemonList] = useState<PokemonListResponse | null>(null);
    const [storedPokemon, setStoredPokemon] = useState<Map<string, Pokemon | null>>(new Map());
    const loading = useRef(false);
    const offsetRef = useRef(0);

    useEffect(() => {
        const loadPokemonList = async () => {
            const local = localStorage.getItem("pokemonList");
            if (local) {
                const parsed = JSON.parse(local);
                setPokemonList(parsed);
                return;
            }
            const data = await getPokemonList();
            setPokemonList(data);
            localStorage.setItem("pokemonList", JSON.stringify(data));
        };
        loadPokemonList();
    }, []);

    useEffect(() => {
        const loadPokemonData = async () => {
            const local = localStorage.getItem("pokemonData");
            if (local) {
                setStoredPokemon(new Map(JSON.parse(local)));
                return
            }
            const data = new Map(pokemonList?.results.map((entry: { name: string, id: number }) => [entry.name, null]));
            const stringData = JSON.stringify([...data]);
            localStorage.setItem("pokemonData", stringData);
            setStoredPokemon(data);
        }

        loadPokemonData();

    }, [pokemonList]);

    const loadNextBatch = async () => {
        if (loading.current || !pokemonList) return;
        loading.current = true;

        const base = pokemonList?.results.map((entry: PokemonListEntry) => entry.name) ?? [];
        const filtered = searchedPokemon ? base.filter((name: string) => name.includes(searchedPokemon.toLocaleLowerCase())) : base;
        const end = Math.min(offsetRef.current + BATCH_SIZE, filtered.length);
        const newMap = new Map(storedPokemon);

        const slice = filtered.slice(offsetRef.current, end);

        await Promise.all(
            slice.map(async (name: string) => {
                if (newMap.has(name)) return;

                const info = pokemonList.results.find((entry: PokemonListEntry) => entry.name === name);
                if (!info) return;

                const pokemon = await getPokemon(info.id);
                newMap.set(name, pokemon ?? null);
            })
        );

        setStoredPokemon(newMap);
        localStorage.setItem("pokemonData", JSON.stringify([...newMap]));
        offsetRef.current = end;
        loading.current = false;

    }

    useEffect(() => {
        offsetRef.current = 0;
    }, [searchedPokemon]);

    return {
        pokemonList,
        storedPokemon,
        loadNextBatch,
        loading
    }
}