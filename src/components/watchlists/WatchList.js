import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { MovieCard } from "../movies/Movie"
import { WatchListContext } from "./WatchListProvider"
import { WatchListMovieContext } from "./WatchListMovieProvider"
import { userStorageKey } from "../auth/authSettings";
import { UserContext } from "../users/UserProvider"
import "./WatchList.css"


export const WatchList = () => {

    const { watchLists, getWatchLists, deleteWatchList, getWatchListById } = useContext(WatchListContext)
    const { getWatchListMovies} = useContext(WatchListMovieContext)
    const { getUsers } = useContext(UserContext)

    const [watchList, setWatchLists] = useState({})

    const userId = parseInt(sessionStorage.getItem(userStorageKey))
  
    const history = useHistory()
    const {watchListId} = useParams()

    
    useEffect(() => {
        getUsers()
        .then(getWatchListMovies)
        .then(getWatchLists)
    }, [])


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
                   

                    return <div className ="watchlist">
                                <h3 className="watchlist__name">{watchList.name}</h3>
                                <button onClick={() => {
                                    history.push(`/watchlists/edit/${watchList.id}`)
                                    }}>Edit WatchList Name
                                </button>

                                <button onClick= {() => 
                                    deleteWatchList(watchList.id)}>
                                    Delete WatchList
                                </button>

                                {watchList.watchListMovies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
                            </div>
                })
                }
            </div>
        </>
    )
}
