import { useState, useRef, useEffect } from "react"

export function useSearch() {
    const [query, setQuery] = useState('')
    const [error, setError] = useState(null)
    // useRed() crea una variable que se puede mutar y persiste en el render
    const isFirstInput = useRef(true)
    // console.log('render')

    // de forma controlada tambien se puede hacer con useEffect
    // el return sin nada regresa undefine
    useEffect(() => {
        if (isFirstInput.current) {
            isFirstInput.current = query === ''
            return
        }

        if (query.startsWith(' ')) return
        
        if (query === '') {
            setError('No se puede buscar un valor vacio.')
            return
        }

        if (query.match(/^\d+$/)) {
            setError('No se puede buscar un pelicula con un numero.')
            return
        }

        if (query?.length <= 2) {
            setError('El nombre de la peli tiene que ser mayor o igual a 3.')
            return
        }
        setError(null)
    }, [query])

    return { query, setQuery, error }
}