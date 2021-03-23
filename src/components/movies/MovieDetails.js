import React, { useContext, useEffect, useState } from "react"
import { MovieContext } from "./MovieProvider"
import { useParams, useHistory } from "react-router-dom"
import { WatchList } from "../watchlists/WatchList"


export const MovieDetails = () => {
    const { getSearchedMovieById } = useContext(MovieContext)
  
    const [movie, setMovies] = useState({})
  
    const {movieId} = useParams()
    const history = useHistory()

    useEffect(() => {
        console.log("useEffect", movieId)
        getSearchedMovieById(movieId)
        .then((response) => {
          setMovies(response)
        })
        }, [])

    
    const year = new Date(`${movie.release_date}`)
        
    return (

        <section className="movie__details">
            <h3>{movie.title}</h3>
            <div>{year.getFullYear()}</div>
            <div>{movie.runtime} minutes</div>
            <div>{movie.overview}</div>
        </section>
    )
}