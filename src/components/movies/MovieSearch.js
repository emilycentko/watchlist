import React, { useContext } from "react"
import { MovieContext } from "./MovieProvider"

export const MovieSearch = () => {
    const { searchMovie } = useContext(MovieContext)
  
    return (
      <>
        <div className ="movie__search">Search for a movie:
        <input type="text"
          className="input--wide"
          onKeyUp={(event) => searchMovie(event.target.value)}
          placeholder="Search for a movie... " />
          </div>
      </>
    )
  }