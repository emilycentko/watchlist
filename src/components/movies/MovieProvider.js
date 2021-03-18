import React, { useState, createContext } from "react"
import { tmdbAPI } from "../auth/Settings.js"

//context to store movies and be used by the components that need this data
export const MovieContext = createContext()

//establishes WHAT data can be used
export const MovieProvider = (props) => {

    // useState hook to hold and set the array of movies
    // define a variable that holds the state of movies and the setMovies function to update it
    const [movies, SetMovies] = useState([])
    
    const [searchedMovies, SetSearchedMovies] = useState([])
    const [ searchTerms, setSearchTerms ] = useState("")


    //get movies from local API in JSON added to watchlist
    const getMovies = () => {
        return fetch("http://localhost:8088/movies")
            .then(res => res.json())
            .then(SetMovies)
    }

    //search for a movie provided by tmdb API - documentation for search query by title
    const searchMovie = (searchTitle) => {
        return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${tmdbAPI.apiKey}&query=${searchTitle}`)
            .then(res => res.json())
            .then(parsedResponse => {
                searchedMovies(parsedResponse.data)
            })
    }

    //add a movie from the tmdb API and POST to local JSON API
    const addMovie = movieObj => {
        return fetch("http://localhost:8088/movies", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(movieObj)
            })
            .then(getMovies)
    }

    const getMovieById = (id) => {
        return fetch(`http://localhost:8088/movies${id}`)
            .then(res => res.json())
    }


    /*return a context provider, which has the `movies` state & the
    function keys `addMovie` & `getMovieById` to allow any child 
    elements to access them
    */
    return (
        <MovieContext.Provider value={{
            movies, getMovies, searchMovie, addMovie, getMovieById,
            searchTerms, setSearchTerms
        }}>
            {props.children}
        </MovieContext.Provider>
    )

}