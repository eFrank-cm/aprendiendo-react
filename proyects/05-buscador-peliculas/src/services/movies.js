const API_KEY = '3bc45e14'

export const searchMovies = async ({ search }) => {
    // si no hay search
    if (search === '') return null

    try {
        // get movies from URL
        const url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`
        const res = await fetch(url)
        const json = await res.json()
        const movies = json.Search

        // Mapped Movies
        return movies?.map(movie => ({
            id: movie.imdbID,
            title: movie.Title,
            year: movie.Year,
            poster: movie.Poster
        }))
    }
    catch (e) {
        throw new Error('Error searching movies.')
    }

}