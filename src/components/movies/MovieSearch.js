import React, { useContext } from "react"
import { MovieContext } from "./MovieProvider"

export const MovieSearch = () => {
    const { searchMovie, filteredMovies } = useContext(MovieContext)
  
    return (
      <>
        <div className ="movie__search">Search for a movie:
        <input type="text"
          className="input--wide"
          onKeyUp={(event) => searchMovie(event.target.value)}
          placeholder="Search for a movie... " />
        </div>
        <div>
            {filteredMovies.map(movie => <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>)}
        </div>
      </>
    )
  }