import type { ChangeEvent } from "react";
import SearchBar from "./SearchBar";

export default function SearchForm() {

  const handleSubmit = (e: ChangeEvent) => {
    e.preventDefault();
  }

  return (
    <>
      <form className="" id="search-form" onSubmit={handleSubmit}>
        <SearchBar />
      </form>
    </>
  );
}
