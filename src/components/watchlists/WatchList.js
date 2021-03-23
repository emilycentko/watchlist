import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { MovieContext } from "../movies/MovieProvider"
import { MovieCard } from "../movies/Movie"
import { WatchListContext } from "./WatchListProvider"
import { WatchListMovieContext } from "./WatchListMovieProvider"
import { userStorageKey } from "../auth/authSettings";
import { UserContext } from "../users/UserProvider"
import "./WatchList.css"


export const WatchList = () => {

    const { watchLists, getWatchLists, deleteWatchList } = useContext(WatchListContext)
    const { getWatchListMovies, deleteWatchListMovie } = useContext(WatchListMovieContext)
    const { getUsers } = useContext(UserContext)


    const userId = parseInt(sessionStorage.getItem(userStorageKey))
  
    const history = useHistory()

    
    useEffect(() => {
        getUsers()
        .then(getWatchListMovies)
        .then(getWatchLists)
    }, [])
    
    const handleDelete = (watchListMovie, watchList) => {
        deleteWatchListMovie(watchListMovie.watchListId)
        .then(deleteWatchList(watchList.id))
        }

    /* getWatchLists fetch call for watch lists embeds the join table
    watchListMovies, which contains array of movies within that watch list,
    filtering watch lists for that user.
    
    Return maps over watchLists and grabs the data associated with all movies
    in each watch list from that join table */

    return (

        <>
            <div className="watchlists">
                <button onClick={() => {history.push("/watchlists/create")}}>Create a New WatchList</button>
            </div>
            <div className="watchlist__list">

                {watchLists.filter(watchList => watchList.userId === userId).map(watchList => {
                    let watchListId = watchList.id

                    return <div className ="watchlist">
                                <h3 className="watchlist__name">{watchList.name}</h3>
                                <button onClick={() => {
                                    history.push(`/watchlists/edit/${watchList.id}`)
                                    }}>Edit WatchList Name
                                </button>

                                <button onClick=
                                    {handleDelete (watchListId)}
                                >Delete WatchList
                                </button>

                                    {watchList.watchListMovies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
                            </div>
                })
                }
            </div>
        </>
    )
}
