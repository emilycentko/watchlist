import React, { useContext, useEffect, useState } from "react";
import { MovieContext } from "./MovieProvider"
import { WatchListContext } from "../watchlists/WatchListProvider"
import { WatchListMovieContext } from "../watchlists/WatchListMovieProvider"
import { useHistory } from 'react-router-dom'
import { MovieSearch } from "./MovieSearch"
import { userStorageKey } from "../auth/authSettings"
import { UserContext } from "../users/UserProvider"
import "./Movie.css"
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
      justifyContent: 'center'
    },
  },
}));

// Component responsible for adding a movie to an existing watch list in a form

export const AddMovieForm = () => {

    const { getSearchedMovieById } = useContext(MovieContext)
    const { watchLists, getWatchLists } = useContext(WatchListContext)
    const { getWatchListMovies, movieId, addMovie } = useContext(WatchListMovieContext)
    const { getUsers } = useContext(UserContext)

    const currentUserId =  parseInt(sessionStorage.getItem(userStorageKey))
    const history = useHistory()

    const classes = useStyles()
    
    // Sets the state for (to be selected) tmdb id poster 
    const [moviePoster, setMoviePoster] = useState("")
    
    /* Sets initial state of watchListMovie, relationship join table
    between movie and watch list and the poster URL from tmdb */
    const [watchListMovie, setWatchListMovie] = useState({
        movieId: 0,
        watchListId: 0,
        poster_path: ""
    })

    // When field changes, state is  updated. 
    const handleControlledInputChange = (event) => {

        // Creates a copy of watchListMovie object to make changes and then update/set state
        const newWatchListObj = { ...watchListMovie }
        let selectedVal = event.target.value

        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        
        // Set the property of the object to new value & update state
        newWatchListObj[event.target.id] = selectedVal
        setWatchListMovie(newWatchListObj)
    }


    const handleSaveMovie = (event) => {
        event.preventDefault()

        if (watchListMovie.watchListId === 0 || watchListMovie.movieId === 0) {
            window.alert("Please select both fields")
        } else {
            
        addMovie({
            movieId: watchListMovie.movieId,
            watchListId: watchListMovie.watchListId,
            poster_path: watchListMovie.poster_path,
        })
        .then(() => history.push("/watchlists"))
        }
    }   

    useEffect(() => {
        getWatchLists()
        .then(getUsers)
        .then(getWatchListMovies)
    }, [])

    /* Use getSearchedMovieById to get selected value (movieId)
    from one movie object (and set appropriate value in dependency array)
    and update state upon click when a new movie is selected from search. */
    useEffect (() => {
        
        // Making a copy of object to set needed property to new value 
        const newWatchListObj = { ...watchListMovie }
        const selectedVal = movieId
        
        newWatchListObj.movieId = selectedVal
       
        setWatchListMovie(newWatchListObj)

        // If a poster (with properties/id) is selected
        if (selectedVal !== 0) {
            getSearchedMovieById(selectedVal)
            .then(movieObj => {
                if (movieObj.poster_path !== null) {
                setMoviePoster(movieObj.poster_path)}}
                )}
        // Looking for movieId when selected
    }, [movieId])

    /* Second useEffect does the same - gets selected value (this time, poster_path)
    from one movie object and updates state upon click when a new movie is selected from search. */
    useEffect (() => {

       const newWatchListObj = { ...watchListMovie }
        const selectedVal = moviePoster
        
        newWatchListObj.poster_path = selectedVal
        setWatchListMovie(newWatchListObj)
        
        // Looking for movie poster path when selected
    }, [moviePoster])

    /* returns watch lists, maps through multiple watch lists
    and mapping through movie cards to appropriate watch list */

    /* MovieSearch is a child of the form and I can't grab data
    upwards from my search. State variables movieId and moviePoster
    set the initial state of each and grab the id and value I needed from my tmdb API
    when button is clicked in the form. Refactored handleControlledInputChange
    functions and also utilized getSearchedMovieById in two useEffects to grab id
    and poster_path property (and set appropriate value in dependency array) from
    one movie object when a new poster is selected from search.*/

  return (
    <form className="addMovieForm" className={classes.root} noValidate autoComplete="off">
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
    
        
        <Button variant="contained" color="secondary" className={classes.addButton} style={{margin: 20, padding: 22}}
        
            onClick={handleSaveMovie}>
            Save Movie to Watch List
        </Button>
    </form>
  )
}