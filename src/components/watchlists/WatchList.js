import React, { useContext, useEffect, useState } from "react"
import { useHistory} from "react-router-dom"
import { MovieCard } from "../movies/Movie"
import { WatchListContext } from "./WatchListProvider"
import { WatchListMovieContext } from "./WatchListMovieProvider"
import { userStorageKey } from "../auth/authSettings";
import { UserContext } from "../users/UserProvider"
import "./WatchList.css"

export const WatchList = () => {

    const { watchLists, getWatchLists, deleteWatchList } = useContext(WatchListContext)
    const { getWatchListMovies} = useContext(WatchListMovieContext)
    const { getUsers } = useContext(UserContext)

    const userId = parseInt(sessionStorage.getItem(userStorageKey))
  
    const history = useHistory()

    useEffect(() => {
        getUsers()
        .then(getWatchLists)
        .then(getWatchListMovies)
    }, [])


    /* getWatchLists fetch call for watch lists embeds the join table
    watchListMovies, which contains array of movies within that watch list,
    filtering watch lists for that user.
    
    Return maps over watchLists and grabs the data associated with all movies
    in each watch list from that join table */

    // Then maps over MovieCard from Movie.js to supply its key/value

    // Includes edit watch list name button & delete button

    return (

        <>
            <div className="watchlists">
                <button onClick={() => {history.push("/watchlists/create")}}>Create a New WatchList</button>
            </div>
            <div className="watchlist__list">

                {watchLists.filter(watchList => watchList.userId === userId).map(watchList => {
                   

                    return <div className ="watchlist">
                                <div>
                                    <h3 className="watchlist__name">{watchList.name}</h3>

                                    <div className="watchlist__buttons">
                                        <button onClick={() => {
                                            history.push(`/watchlists/edit/${watchList.id}`)
                                            }}>Edit WatchList Name
                                        </button>

                                        <button onClick= {() => 
                                            deleteWatchList(watchList.id)}>
                                            Delete WatchList
                                        </button>
                                    </div>
                                </div>
                            
                                {watchList.watchListMovies.map(movie => <MovieCard key={movie.id} movie={movie}/>)}
                            </div>
                })
                }
            </div>
        </>
    )
}
