import type { ChangeEvent } from "react";
import SearchBar from "./SearchBar";

export default function SearchForm() {

  const handleSubmit = (e: ChangeEvent) => {
    e.preventDefault();
  }

  return (
    <>
      <form className="mx-auto my-4
        min-w-[240px] max-w-[720px] w-[94vw]" id="search-form" onSubmit={handleSubmit}>
        <SearchBar />
      </form>
    </>
  );
}
