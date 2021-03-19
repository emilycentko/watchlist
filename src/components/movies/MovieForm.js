import React, { useContext, useEffect, useState } from "react"
import { MovieContext } from "./MovieProvider"
import { WatchListContext } from "./watchlists/WatchListProvider"
import { WatchListMovieContext } from "./watchlists/WatchListMovieProvider"
import { useHistory, useParams } from 'react-router-dom'

// component responsible for searching and adding a movie in a form

export const MovieForm = () => {

    const { addMovie, searchMovie, getSearchedMovieById } = useContext(MovieContext)
    const { watchLists, getWatchLists } = useContext(WatchListContext)
    const { watchListMovies, getWatchListMoves } = useContext(WatchListMovieContext)
    
    const [filteredMovies, setFilteredMovies] = useState([])
    const history = useHistory()

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
            // const subset = movies.filter(movie => movie.title.toLowerCase().includes(searchTerms))
            // setFiltered(subset)
            searchMovie(searchTerms)
        } else {
            // If the search field is blank, display all mo
            return ""
        }
  }, [searchTerms])
    
    const addMovie = () => {
        if 
    }
    
    
    

}