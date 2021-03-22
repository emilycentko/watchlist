import React, { useState, createContext, useContext } from "react"
import { tmdbAPI } from "../auth/Settings.js"

//context to store movies and be used by the components that need this data
export const MovieContext = createContext()

//establishes WHAT data can be used
export const MovieProvider = (props) => {

    // useState hook to hold and set the array of movies
    // define a variable that holds the state of movies and the setMovies function to update it
    const [movies, setMovies] = useState([])
    
    //search variable and state
    const [filteredMovies, setFilteredMovies] = useState([])
    const [searchTerms, setSearchTerms] = useState("")

    //search for a movie provided by tmdb API - documentation for search query by title
    const searchMovie = (searchTitle) => {
        return fetch(`${tmdbAPI.baseURL}${tmdbAPI.apiKey}&query=${searchTitle}`)
            .then(res => res.json())
            .then(parsedResponse => {
                console.log(parsedResponse.results)
                setFilteredMovies(parsedResponse.results)
            })
    }

    //grabs the id and poster_path for AddMovie form
    const getSearchedMovieById = (id) => {
        return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${tmdbAPI.apiKey}&language=en-US`)
            .then(res => res.json())
    }


    /*return a context provider, which has the `movies` state & the
    function keys `addMovie` & `getMovieById` to allow any child 
    elements to access them
    */
    return (
        <MovieContext.Provider value={{
            movies, searchMovie, getSearchedMovieById,
            filteredMovies, setFilteredMovies,
            searchTerms, setSearchTerms
        }}>
            {props.children}
        </MovieContext.Provider>
    )

}