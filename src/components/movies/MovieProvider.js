import React, { useState, createContext } from "react"
import { tmdbAPI } from "./auth/Settings.js"

//context imported and used by the components that need data
export const MovieContext = createContext()

//establishes WHAT data can be used
export const MovieProvider = (props) => {

    const [movies, SetMovies] = useState([])
    const [ searchTerms, setSearchTerms ] = useState("")


    //get movies from local API in JSON added to watchlist
    const getMovies = () => {
        return fetch("http://localhost:8088/movies")
            .then(res => res.json())
            .then(setMovies)
    }

    //search for a movie provided by tmdb API - documentation for search query by title
    const searchMovie = (searchTitle) => {
        return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${tmdbAPI.apiKey}&query=${searchTitle}`)
            .then(res => res.json())
            .then(parsedResponse => {
                movie = parsedResponse.list
            })
    }

    //add a movie from the tmdb API and POST to local JSON API
    const addMovie = movie => {
        return fetch("http://localhost:8088/movies", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(movie)
            })
            .then(res => res.json())
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