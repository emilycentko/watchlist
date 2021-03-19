import React, { useContext, useEffect, useState } from "react"
import { MovieContext } from "./MovieProvider"
import { WatchListContext } from "../watchlists/WatchListProvider"
import { WatchListMovieContext } from "../watchlists/WatchListMovieProvider"
import { useHistory, useParams } from 'react-router-dom'

// component responsible for searching and adding a movie in a form

export const AddMovieForm = () => {

    const { movies, addMovie, getMovies, searchMovie, getSearchedMovieById, searchTerms } = useContext(MovieContext)
    const { watchLists, getWatchLists } = useContext(WatchListContext)
    const { watchListMovies, getWatchListMovies } = useContext(WatchListMovieContext)
    
    const [filteredMovies, setFilteredMovies] = useState([])
    const history = useHistory()

    const [movie, setMovies] = useState({
        title: "",
        runtime: 0,
        release_date: "",
        overview: "",
        poster_path: "",
        userId: parseInt(localStorage.getItem("app_user_id")),
      });

    useEffect(() => {
        getWatchListMovies()
        .then(getWatchLists)
        .then(getMovies)
    }, [])

    // useEffect dependency array with dependencies - will run if dependency changes (state)
    // searchTerms will cause a change
    
    useEffect(() => {
        if (searchTerms !== "") {
            // If the search field is not blank, display matching movies
            const subset = movies.filter(movie => movie.title.toLowerCase().includes(searchTerms))
            // setFiltered(subset)
            searchMovie(searchTerms)
        }
  }, [searchTerms])
    
  return (
    <form className="addMovieForm">
          <fieldset>
            <div className="form-group">
                
                <label htmlFor="movie">Choose a movie:</label>
                <select value={movie.id} id="movieId" required autoFocus className="form-control">
                    <option value="0">Select a movie</option>
                </select>
                
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">

                <label htmlFor="watchList">Choose a watch list:</label>
                <select value={watchList.id} id="watchListId" required autoFocus className="form-control">
                
                    <option value="0">Select a watch list</option>
                        
                </select>
            </div>
        </fieldset>
    </form>
  )
    
    
    

}