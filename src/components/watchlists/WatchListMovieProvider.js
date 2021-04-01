import React, { useState, createContext } from "react"

export const WatchListMovieContext = createContext()

// Provider for join table/relationship between movies and watch lists

export const WatchListMovieProvider = (props) => {
    const [watchListMovies, setWatchListMovies] = useState([])
    const [movieId, setMovieId] = useState(0)

    const getWatchListMovies = () => {
        return fetch("http://localhost:8088/watchListMovies")
            .then(res => res.json())
            .then(setWatchListMovies)
    }

    //add a movie from the tmdb API and POST to local JSON watchlist
    const addMovie = movie => {
        return fetch("http://localhost:8088/watchListMovies", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(movie)
            })
            .then(getWatchListMovies)
    }

    const getWatchListMovieById = (id) => {
        return fetch(`http://localhost:8088/watchListMovies/${id}`)
            .then(res => res.json())
    }

    const removeMovie = id => {
        return fetch(`http://localhost:8088/watchListMovies/${id}`, {
            method: "DELETE"
        })
        .then(getWatchListMovies)
    }

    /* Return a context provider, which has the `watchListMovies` state & the
    function keys to allow any child elements to access them */
    return (
        <WatchListMovieContext.Provider value={{
            watchListMovies, getWatchListMovies, addMovie, removeMovie, getWatchListMovieById,
            movieId, setMovieId
        }}>
            {props.children}
        </WatchListMovieContext.Provider>
    )
}