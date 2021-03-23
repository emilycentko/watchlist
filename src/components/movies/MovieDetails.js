import React, { useContext, useEffect, useState } from "react"
import { MovieContext } from "./MovieProvider"
import { useParams, useHistory } from "react-router-dom"
import { WatchListMovieContext } from "../watchlists/WatchListMovieProvider"


export const MovieDetails = () => {
    const { getSearchedMovieById } = useContext(MovieContext)
    const { removeMovie } = useContext(WatchListMovieContext)
  
    const [movie, setMovies] = useState({})
    const [watchListMovie] = useState({})
  
    const {movieId} = useParams()
    const {id} = useParams()
    const history = useHistory()

    useEffect(() => {
        console.log("useEffect", movieId)
        getSearchedMovieById(movieId)
        .then((response) => {
          setMovies(response)
        })
        }, [])

    // const handleRemove = () => {
    //     removeMovie(movie.id)
    //         .then(() => {
    //         history.push("/watchlists")
    //     })
    // }
    
    const year = new Date(`${movie.release_date}`)
    console.log(movieId)
        
    return (

        <section className="movie__details">
            <h3>{movie.title}</h3>
            <div>{year.getFullYear()}</div>
            <div>{movie.runtime} minutes</div>
            <div>{movie.overview}</div>
    
            <button onClick={() => {
                removeMovie(id)
                
                .then (() =>
                    history.push(`/watchlists`)
                )}}>Remove</button>
        </section>
    )
}