import React from "react"
import { Link } from "react-router-dom"
import "./Movie.css"

/* Responsible for representing HTML rendering of
ONE movie on the DOM under current user's watch list
and upon click --> MovieDetails.js */

export const MovieCard = ( {movie} ) => {

    return (
        <section className="movie__card">
            <Link to={`/watchlists/moviedetails/${movie.movieId}/${movie.id}`}>
                <img className="movie__poster" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
            </Link>
            
            
        </section>
    )
}