import React from 'react'

export const ListOfMovies = ({ movies }) => {
    return (
        <ul className='movies'>
            {
                movies.map(movie => (
                    // no es buena practica usar el indice del array como key
                    // tampoco lo es usar los TAG de la API ya que el componente
                    // esta atado a la API
                    <li className='movie' key={movie.id}>
                        <h3>{movie.title}</h3>
                        <p>{movie.year}</p>
                        <img src={movie.poster} />
                    </li>
                ))
            }
        </ul>
    )
}

export const NoMoviesResult = () => {
    return (
        <p>No hay resultados</p>
    )
}

export const Movies = ({ movies }) => {
    const hasMovies = movies?.length > 0

    return (
        hasMovies ? <ListOfMovies movies={movies} /> : <NoMoviesResult />
    )
}
