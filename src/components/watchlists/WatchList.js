import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { MovieContext } from "../movies/MovieProvider"
import { MovieCard } from "../movies/Movie"
import { WatchListContext } from "./WatchListProvider"
import { WatchListMovieContext } from "./WatchListMovieProvider"
import "./WatchList.css"


export const WatchList = () => {

    const { movies, getMovies } = useContext(MovieContext)
    const { watchLists, getWatchLists } = useContext(WatchListContext)
    const { watchListMovies, getWatchListMovies } = useContext(WatchListMovieContext)

    const history = useHistory()

    useEffect(() => {
        getWatchLists()
    }, [])



    return (

        <>
            <div>

                {watchLists.map(watchList => {


                    return <div>
                        <h3>{watchList.name}</h3>
                        {watchList.watchListMovies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
                    </div>
                })
                }
            </div>
        </>
    )
}

    // return (
    //     <>
    //         <div className="watchlist">

    //         {/* {movies.map(movie => {

    //                 return <MovieCard key={movie.id}
    //                     movie={movie}
    //                 />
    //                 })
    //             }          */}
    //         </div>

    //     </>
    // )
