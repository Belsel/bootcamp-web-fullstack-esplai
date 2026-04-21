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
        type="text"
        name="pokemon"
        placeholder="Filtra Pokémon por nombre..."
        className=""
        value={search}
        onChange={handleSearch}
      />
    </>
  );
}
