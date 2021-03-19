import React, { useState, createContext } from "react"

export const WatchListMovieContext = createContext()

export const WatchListMovieProvider = (props) => {
    const [watchListMovies, setWatchListMovies] = useState([])


    const getWatchListMovies = () => {
        return fetch("http://localhost:8088/watchlistmovies?_expand=movie&_expand=watchList")
            .then(res => res.json())
            .then(setWatchListMovies)
    }

    /*return a context provider, which has the `watchlists` state & the
    function keys to allow any child elements to access them
    */
    return (
        <WatchListMovieContext.Provider value={{
            watchListMovies, getWatchListMovies
        }}>
            {props.children}
        </WatchListMovieContext.Provider>
    )
}