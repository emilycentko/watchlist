import React from "react"
// import { Link } from "react-router-dom"
import "./Movie.css"


//responsible for representing HTML rendering of ONE movie on the DOM

export const MovieCard = ( {movie} ) => {
    return (
        <section className="movie">
            {/* <Link to={`/watchlists/moviedetails/${movie.id}`}>
                { movie.poster_path }
            </Link> */}
            <div>
                <img className="movie__poster" src={ movie.poster_path } alt="Movie Poster"></img>
            </div>
        </section>
    )
}