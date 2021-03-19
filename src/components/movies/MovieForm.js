import React, { useContext, useEffect, useState } from "react";
import { MovieContext } from "./MovieProvider"
import { WatchListContext } from "../watchlists/WatchListProvider"
import { WatchListMovieContext } from "../watchlists/WatchListMovieProvider"
import { useHistory, useParams } from 'react-router-dom'
import { MovieSearch } from "./MovieSearch"

// component responsible for searching and adding a movie in a form

export const AddMovieForm = () => {

    const { movies, addMovie, getMovies, searchMovie, searchTerms } = useContext(MovieContext)
    const { watchLists, getWatchLists } = useContext(WatchListContext)
    const { watchListMovies, getWatchListMovies } = useContext(WatchListMovieContext)
    
    const [filteredMovies, setFilteredMovies] = useState([])
    const history = useHistory()


    const [movie, setMovie] = useState({})

    const handleControlledInputChange = (event) => {
        const newMovie = { ...movie }
        let selectedVal = event.target.value

        newMovie[event.target.id] = selectedVal
        setMovie(newMovie)
    }

    const handleSaveMovie = () => {
        addMovie({
            title: movie.title,
            runtime: movie.runtime,
            release_date: movie.release_date,
            overview: movie.overview,
            poster: `https://image.tmdb.org/t/p/w500$${movie.poster_path}`
            })
        .then(() => history.push("/watchlists"))
    }

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
                <MovieSearch />
            </div>
        </fieldset>

        <fieldset>
            <div className="form-group">

                <label htmlFor="watchList">Choose a watch list:</label>
                <select value ="" id="name" className="form-control">
                
                    <option value="0">Select a watch list</option>
                        
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