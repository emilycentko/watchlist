import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { MovieContext } from "../movies/MovieProvider"
import { MovieCard } from "../movies/Movie"
import { WatchListContext } from "./WatchListProvider"
import "./WatchList.css"
  

export const WatchList = () => {
    
    const { movies, getMovies } = useContext(MovieContext)
    const { watchlists, getWatchLists } = useContext(WatchListContext)

    const history = useHistory()

    useEffect(() => {
        getWatchLists()
        .then(getMovies)
      }, [])


    return (
        <>
            <h2>WatchList Name To Interpolate Here</h2>
            <div className="watchlist">
                {movies.map(movie => {
                    
                    const watchlist = watchlists.find(watchlist => watchlist.id === movie.watchlistId)

                    return <MovieCard key={movie.id}
                        movie={movie}
                        watchlist={watchlist} />
                    })
                }         
            </div>
    
        </>
    )
}