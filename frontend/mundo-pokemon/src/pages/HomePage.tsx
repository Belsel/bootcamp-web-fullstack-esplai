import { Outlet } from "react-router";
import Pokedex from "../components/Pokedex";
import SearchBar from "../components/SearchBar";

export default function HomePage() {
    return (
        <>
            <SearchBar />
            <Pokedex />
            <Outlet />
        </>
    )
}