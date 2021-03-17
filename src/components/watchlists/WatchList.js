import React, { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { MovieContext } from "../movies/MovieProvider"
import { MovieCard } from "../movies/Movie"
import { WatchListContext } from "./WatchListProvider"

export const WatchList = () => {
    
    const { movies, getMovies } = useContext(MovieContext)
    const { watchlists, getWatchLists } = useContext(WatchListContext)

    //grab current user id from authSettings.js
    const userId = parseInt(localStorage.getItem("app_user_id"))

    const history = useHistory()

    useEffect(() => {
        getWatchLists()
        .then(getMovies)
      }, [])

    return (
        <>
            <div className="watchlist">
            {
            movies.map(movie => {
                return <MovieCard key={movie.id} movie={movie} />
            })
            }
            </div>
        </>
    )
}