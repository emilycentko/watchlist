import React from "react"
import { Link } from "react-router-dom"
import "./Movie.css"

// responsible for representing HTML rendering of ONE movie on the DOM

export const MovieCard = ( {movie} ) => {
    
    console.log(movie.movieId)

    return (
        <section className="movie__card">
            <Link to={`/watchlists/moviedetails/${movie.movieId}`}>
                <img className="movie__poster" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
            </Link>
            
            
        </section>
    )
}