import React from "react"
import { Link } from "react-router-dom"
import "./Movie.css"


//responsible for representing HTML rendering of ONE movie on the DOM

export const MovieCard = () => {
    return (
        <section className="movie">
            <Link to={`/watchlists/moviedetails/${movie.id}`}>
                { movie.poster }
            </Link>
        </section>
    )
}