import { Route, Routes } from "react-router"
import Layout from "./layouts/SPALayout"
import Home from "./pages/HomePage";
import PokemonInfoPage from "./pages/PokemonInfoPage";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} >
            <Route path="/pokemon/:pokemon" element={<PokemonInfoPage />} />
          </Route>
        </Route >
      </Routes >
    </>
  );
}

export default App;
