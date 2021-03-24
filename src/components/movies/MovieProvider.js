import React, { useState, createContext, useContext } from "react"
import { tmdbAPI } from "../auth/Settings.js"

// Context to store movies from tmdb and be used by the components that need this data
export const MovieContext = createContext()

//establishes WHAT data can be used
export const MovieProvider = (props) => {

    // useState hook to hold and set the array of movies
    // Define a variable that holds the state of movies
    const [movies] = useState([])
    
    // Search variable and state
    const [filteredMovies, setFilteredMovies] = useState([])
    const [searchTerms, setSearchTerms] = useState("")

    // Search for a movie provided by tmdb API to search query by title and set state of filtered movies
    const searchMovie = (searchTitle) => {
        return fetch(`${tmdbAPI.baseURL}${tmdbAPI.apiKey}&query=${searchTitle}`)
            .then(res => res.json())
            .then(parsedResponse => {
                console.log(parsedResponse.results)
                setFilteredMovies(parsedResponse.results)
            })
    }

    // Grabs the needed properties for one movie by id in AddMovie form and Details
    const getSearchedMovieById = (id) => {
        return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${tmdbAPI.apiKey}&language=en-US`)
            .then(res => res.json())
    }


    /* Return a context provider, which has the `movies` state & the
    function keys to allow any child elements to access them */
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