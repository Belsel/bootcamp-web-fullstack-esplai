import "./App.css";
import Pokedex from "./components/Pokedex";
import SearchForm from "./components/SearchForm";
import { useSearch } from "./hooks/useSearch";

function App() {
  return (
    <>
      <SearchForm />
      <Pokedex />
    </>
  );
}

export default App;
