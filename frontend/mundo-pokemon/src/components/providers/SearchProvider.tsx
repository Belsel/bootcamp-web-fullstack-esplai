import { useMemo } from "react";
import { useState } from "react";
import { SearchContext } from "../../context/searchContext";

type Props = {
    children: React.ReactNode;
}

export default function SearchProvider({ children }: Props) {
    const [search, setSearch] = useState<string>("");

    const value = useMemo(() => ({ search, setSearch }), [search]);

    return (
        <>
            <SearchContext.Provider value={value}>
                {children}
            </SearchContext.Provider>
        </>
    )
}