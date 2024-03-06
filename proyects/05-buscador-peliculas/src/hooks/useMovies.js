import { useRef, useState, useMemo, useCallback } from 'react'
import { searchMovies } from '../services/movies'

export function useMovies({ search, sort }) {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const previousSearch = useRef()

    const getMovies = useCallback(async ({ search }) => {
        console.log('getMovies')
        if (search === previousSearch.current) return
        try {
            setLoading(true)
            setError(null)
            previousSearch.current = search
            const newMovies = await searchMovies({ search })
            setMovies(newMovies)
        }
        catch (e) {
            setError(e.message)
        }
        finally {
            setLoading(false)
        }
    }, [])

    const sortMovies = useMemo(() => {
        if (!movies) return 
        return sort
            ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
            : movies
    }, [sort, movies])



    return { movies: sortMovies, getMovies, loading }
}
