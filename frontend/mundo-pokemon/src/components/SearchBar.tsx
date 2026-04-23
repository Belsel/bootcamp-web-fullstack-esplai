import { useCallback, type ChangeEvent } from "react";
import { useSearch } from "../hooks/useSearch";

export default function SearchBar() {
  const { search, setSearch } = useSearch();

  const handleSearch = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  }, [setSearch]);

  return (
    <>
      <input
        id="search-pokemon"
        type="search"
        name="pokemon"
        placeholder="Filtra Pokémon por nombre..."
        className="w-full h-10 text-center text-lg font-ubuntu
        shadow-md outline-none border-none bg-amber-50
        placeholder:text-(--search-form-placeholder-color)
        placeholder:font-light
        rounded-sm"
        value={search}
        onChange={handleSearch}
      />
    </>
  );
}
