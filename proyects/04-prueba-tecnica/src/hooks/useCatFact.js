import { useEffect, useState } from "react"
import { getRadomFact } from "../services/facts"

export function useCatFact() {
    const [fact, setFact] = useState()

    const refreshFact = () => {
        // getRadomFact().then(setFact)
        // las dos anteriores son similares, se puede pasar una funcion como parametro
        // la diferencia esta en que la ultima es buena practica, y creas un funcion mas
        getRadomFact().then(newFact => setFact(newFact))
    }

    // ES BUENA PRACTICA QUE LOS EFECTOS TENGA SOLO UNA RESPONSABILIDAD
    // efecto para recuperar el fact a la pagina
    useEffect(() => {
        refreshFact()
    }, [])

    return { fact, refreshFact }
}
