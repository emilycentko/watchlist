import React, { useContext, useEffect, useState } from "react"
import { MovieContext } from "./MovieProvider"
import { useHistory } from "react-router-dom"
import { WatchListMovieContext } from "../watchlists/WatchListMovieProvider"

/* Component responsible for displaying details for one movie
after movie poster is selected from Movie.js/WatchList page */

export const MovieDetails = ({movieId}) => {
    const { getSearchedMovieById } = useContext(MovieContext)
    const { removeMovie } = useContext(WatchListMovieContext)
  
    const [movie, setMovies] = useState({})
    const [watchListMovie, setWatchListMovies] = useState({})
  
    const history = useHistory()

    const addedMovie = watchListMovie.id

    // get that movie id from tmdb and set state
    useEffect(() => {
        
        getSearchedMovieById(movieId)
        .then((response) => {
          setMovies(response)
        })
        }, [])

    //year only
    const year = new Date(`${movie.release_date}`)
        
    //details and delete movie
    return (

        <section className="movie__details">
            <h3>{movie.title}</h3>
            <div>{year.getFullYear()}</div>
            <div>{movie.runtime} minutes</div>
            <div>{movie.overview}</div>
    
            <button onClick={() => {
                removeMovie(addedMovie)
                .then (() =>
                    history.push(`/watchlists`)
                )}}>Remove</button>
        </section>
    )
}