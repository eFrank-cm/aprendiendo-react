import { createContext, useState } from "react";

// 1. crear contexto
export const FiltersContext = createContext()


// 2. proveer contexto
export const FiltersProvider = ({ children }) => {
    const [filters, setFilters] = useState({
        category: 'all',
        maxPrice: 1000
    })

    return (
        <FiltersContext.Provider value={{
            filters,
            setFilters
        }}>
            {children}
        </FiltersContext.Provider>
    )
}


