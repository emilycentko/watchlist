import React, { useContext, useEffect, useState } from "react"
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
            <div className="row">
                
                <div className="row__posters">
                
                    {
                    movies.map(movie => {
                        return <MovieCard key={movie.id} movie={movie}/>
                    })
                    }
                </div>
            </div>
        </>
    )
}