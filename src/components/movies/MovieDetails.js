import React, { useContext, useEffect, useState } from "react"
import { MovieContext } from "./MovieProvider"
import { WatchListMovieContext } from "../watchlists/WatchListMovieProvider"
import Modal from '@material-ui/core/Modal';


/* Component responsible for displaying details for one movie
after movie poster is selected from Movie.js/WatchList page */

export const MovieDetails = ({watchListMovieId}) => {
    const { getSearchedMovieById } = useContext(MovieContext)
    const { removeMovie } = useContext(WatchListMovieContext)
  
    const [movie, setMovies] = useState({})

    const [open, setOpen] = useState(true)
  
    

    const handleClose = () => {
      setOpen(false);
    };

    // get that movie id from tmdb and set state
    useEffect(() => {
        
        getSearchedMovieById(watchListMovieId.movieId)
        .then((response) => {
          setMovies(response)
        })
        }, [])

    //year only
    const year = new Date(`${movie.release_date}`)

    console.log(watchListMovieId)
        
    //details and delete movie
    return (
        
        <section className="movie__details">
            <h3>{movie.title}</h3>
            <div>{year.getFullYear()}</div>
            <div>{movie.runtime} minutes</div>
            <div>{movie.overview}</div>
    
            <button onClick={() => {
                removeMovie(watchListMovieId.id)
                .then(() =>
                    handleClose()
                    
                )}}>Remove</button>
            
        </section>
    )
}