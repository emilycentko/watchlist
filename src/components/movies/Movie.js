import React from "react"
// import { Link } from "react-router-dom"
import "./Movie.css"


// responsible for representing HTML rendering of ONE movie on the DOM

export const MovieCard = ( {movie} ) => {
    return (
        <section className="movie__card">
            {/* <Link to={`/watchlists/moviedetails/${movie.id}`}>
                { movie.poster_path }
            </Link> */}
            
            <img className="movie__poster" src={ movie.poster } alt="Movie Poster"></img>
            <button>Add</button>
        </section>
    )
}

