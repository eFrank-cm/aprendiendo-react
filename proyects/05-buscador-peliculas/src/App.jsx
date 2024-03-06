import { useCallback, useEffect, useRef, useState } from 'react'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'
import debounce from 'just-debounce-it'
import './App.css'

export const App = () => {
    const [sort, setSort] = useState(false)
    const { query, setQuery, error } = useSearch() // captura la busqueda y valida
    const { movies, getMovies, loading } = useMovies({ search: query, sort }) // ejectua la busqueda

    const debouncedGetMovies = useCallback(
        debounce(search => {
            console.log('search', search)
            getMovies({ search })
        }, 300)
        , [getMovies]
    )

    // const debouncedGetMovies = useCallback(
    //     debounce(search => {
    //         console.log('search', search)
    //         getMovies({ search })
    //     }, 400)
    //     , [getMovies]
    // )


    // SOLO CON JS (esto es una forma no controlada) mas optimo, menos problemas
    const handleSubmit = (e) => {
        e.preventDefault()
        // const { query } = Object.fromEntries(new FormData(e.target))
        getMovies({ search: query })
    }

    // la forma controla es con REACT son un estado
    const handleOnChange = (e) => {
        const newQuery = e.target.value
        setQuery(newQuery)
        debouncedGetMovies(newQuery)
    }
    // ambas formas estan bien, solo son formas

    const handleSort = () => {
        setSort(!sort)
    }

    // efecto cada vez que se genera getMovies
    // useEffect(() => {
    //     console.log('getMovies')
    // }, [getMovies])

    return (
        <div className='page'>
            <header>
                <h1>Buscador de Peliculas</h1>
                <form className='form' onSubmit={handleSubmit}>
                    <input
                        style={{
                            border: '1px solid transparent',
                            borderColor: error ? 'red' : 'transparent'
                        }}
                        onChange={handleOnChange}
                        name='query' value={query}
                        placeholder='Star Wars, Avengers, ...'
                    />
                    <button type='submit'>Buscar</button>
                </form>
                <div className='sort'>
                    <label>Ordenar por Año</label>
                    <input type="checkbox" onChange={handleSort} checked={sort} />
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </header>

            <main>
                {
                    loading ? <p>Cargando...</p> : <Movies movies={movies} />
                }
            </main>
        </div>
    )
}
