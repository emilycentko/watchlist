import React from "react"
// import { Link } from "react-router-dom"
import "./Movie.css"


// responsible for representing HTML rendering of ONE movie on the DOM

export const MovieCard = ( {movie} ) => {
    return (
        <section className="movie__card">
            {/* <Link to={`/watchlists/moviedetails/${movie.id}`}>
            </Link> */}
            
                <img className="movie__poster" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
            
        </section>
    )
}