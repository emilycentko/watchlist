import React, { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { MovieContext } from "../movies/MovieProvider"
import { MovieCard } from "../movies/Movie"
import { WatchListContext } from "./WatchListProvider"
import { WatchListMovieContext } from "./WatchListMovieProvider"
import { userStorageKey } from "../auth/authSettings";
import "./WatchList.css"
import { UserContext } from "../users/UserProvider"


export const WatchList = () => {

    const { movies, getMovies } = useContext(MovieContext)
    const { watchLists, getWatchLists } = useContext(WatchListContext)
    const { watchListMovies, getWatchListMovies } = useContext(WatchListMovieContext)
    const { users, getUsers } = useContext(UserContext)

    const currentUserId = parseInt(sessionStorage.getItem(userStorageKey))
    const currentUser = users.find(user => user.id === currentUserId)
    const history = useHistory()

    
    useEffect(() => {
        getUsers()
    }, [])

    useEffect(() => {
        getWatchLists()
    }, [])


    /* getWatchLists fetch call for watch lists embeds the join table
    watchListMovies, which contains array of movies within that watch list.
    Return maps over watchLists and grabs the data associated with all movies
    in each watch list from that join table */

    return (

        <>
            <div className="watchlist__list">

                {watchLists.map(watchList => {


                    return <div className ="watchlist">
                                <h3 className="watchlist__title">{watchList.name}</h3>
                                    {watchList.watchListMovies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
                            </div>
                })
                }
            </div>
        </>
    )
}
