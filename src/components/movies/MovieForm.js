import React, { useContext, useEffect, useState } from "react";
import { MovieContext } from "./MovieProvider"
import { WatchListContext } from "../watchlists/WatchListProvider"
import { WatchListMovieContext } from "../watchlists/WatchListMovieProvider"
import { useHistory } from 'react-router-dom'
import { MovieSearch } from "./MovieSearch"
import { userStorageKey } from "../auth/authSettings"
import { UserContext } from "../users/UserProvider"

// component responsible for searching and adding a movie in a form

export const AddMovieForm = () => {

    const { addMovie, getMovies } = useContext(MovieContext)
    const { watchLists, getWatchLists } = useContext(WatchListContext)
    const { watchListMovies, getWatchListMovies } = useContext(WatchListMovieContext)
    const { users, getUsers } = useContext(UserContext)
    
    // const [filteredMovies, setFilteredMovies] = useState([])

    const currentUserId =  parseInt(sessionStorage.getItem(userStorageKey))
    const history = useHistory()


    const [movie, setMovie] = useState({})
    const [watchList, setWatchList] = useState({})
    const [watchListMovie, setWatchListMovie] = useState({})

    const handleControlledInputChange = (event) => {
        const newMovie = { ...movie }
        let selectedVal = event.target.value

        newMovie[event.target.id] = selectedVal
        setMovie(newMovie)
    }

    const handleSaveMovie = () => {
        
        addMovie({
            name: watchList.name,
            movieId: watchListMovie.movieId,
            watchListId: watchListMovie.watchListId,
            poster: movie.poster_path,
            userId: currentUserId
        })
        .then(() => history.push("/watchlists"))
    }

    useEffect(() => {
        getWatchLists()
        .then(getUsers)
        .then (getWatchListMovies)
        .then(getMovies)
    }, [])


  return (
    <form className="addMovieForm">
        <fieldset>
            <div className="form-group">
                <MovieSearch />
            </div>
        </fieldset>

        <fieldset>
            <div className="form-group">

                <label htmlFor="watchList">Choose a watch list:</label>
                <select value ={watchList.id} id="watchListId" className="form-control" onChange={handleControlledInputChange}>
                
                    <option value="0">Select a watch list</option>
                    {watchLists.filter(watchList => watchList.userId === currentUserId).map(watchList => (
                        <option key={watchList.id} value={watchList.id}>
                            {watchList.name}
                        </option>
                    ))}
                </select>
            </div>
        </fieldset>
        <button className="btn btn-primary"
            onClick={event => {
                event.preventDefault()
                handleSaveMovie()
            }}>Save Movie to Watch List
        </button>
    </form>
  )
}