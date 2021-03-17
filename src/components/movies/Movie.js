import React, { useState, createContext } from "react"

//context imported and used by the components that need data
export const MovieContext = createContext()

//establishes WHAT data can be used
export const MovieProvider = (props) => {

    const [movies, SetMovies] = useState([])
    const [ searchTerms, setSearchTerms ] = useState("")

    const getMovies = () => {
        return fetch("")
        .then(res => res.json())
        .then(setMovies)
    }

    return (
        <MovieContext.Provider value={{
            movies, getMovies,
            searchTerms, setSearchTerms
        }}>
            {props.children}
        </MovieContext.Provider>
    )

}