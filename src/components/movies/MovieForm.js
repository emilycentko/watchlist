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

    const { getSearchedMovieById } = useContext(MovieContext)
    const { watchLists, getWatchLists } = useContext(WatchListContext)
    const { getWatchListMovies, movieId, addMovie } = useContext(WatchListMovieContext)
    const { getUsers } = useContext(UserContext)

    const currentUserId =  parseInt(sessionStorage.getItem(userStorageKey))
    const history = useHistory()
    
    const [isLoading, setIsLoading] = useState(true);
    const [moviePoster, setMoviePoster] = useState("")
    
    const [watchListMovie, setWatchListMovie] = useState({
        movieId: 0,
        watchListId: 0,
        poster_path: ""
    })

    const handleControlledInputChange = (event) => {
        const newWatchListObj = { ...watchListMovie }
        let selectedVal = event.target.value

        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }

        newWatchListObj[event.target.id] = selectedVal
        setWatchListMovie(newWatchListObj)
    }

    const handleSaveMovie = (event) => {
        event.preventDefault()

        // if (parseInt(watchList.id) === 0) {
        //     window.alert("Please complete the field")
        // } else {

        addMovie({
            movieId: watchListMovie.movieId,
            watchListId: watchListMovie.watchListId,
            poster_path: watchListMovie.poster_path,
        })
        .then(() => history.push("/watchlists"))
        
}   

    useEffect(() => {
        getWatchLists()
        .then(getUsers)
        .then(getWatchListMovies)
    }, [])

    useEffect (() => {
        console.log(movieId)
        const newWatchListObj = { ...watchListMovie }
        const selectedVal = movieId
        
        newWatchListObj.movieId = selectedVal
        console.log(newWatchListObj)
        setWatchListMovie(newWatchListObj)
        if (selectedVal !== 0) {
            getSearchedMovieById(selectedVal)
            .then(movieObj => {
                if (movieObj.poster_path !== null) {
                setMoviePoster(movieObj.poster_path)}}
                )}
    }, [movieId])

    useEffect (() => {
       console.log(moviePoster) 

       const newWatchListObj = { ...watchListMovie }
        const selectedVal = moviePoster
        
        newWatchListObj.poster_path = selectedVal
        console.log(newWatchListObj)
        setWatchListMovie(newWatchListObj)
        
    }, [moviePoster])


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
                <select value ={watchListMovie.watchListId} id="watchListId" className="form-control" onChange={handleControlledInputChange}>
                
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
        disabled={isLoading}
            onClick={handleSaveMovie}>Save Movie to Watch List
        </button>
    </form>
  )
}