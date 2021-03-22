import React, { useContext, useState } from "react"
import { MovieContext } from "./MovieProvider"
import { WatchListMovieContext } from "../watchlists/WatchListMovieProvider"

//component responsible for searching a movie and displaying filtered movies with a button to add
//called in MovieForm

export const MovieSearch = () => {
    const { searchMovie, filteredMovies, setFilteredMovies } = useContext(MovieContext)
    const { setMovieId } = useContext(WatchListMovieContext)

    //handles grabbing movieId value and setting new movieId state upon selection
    const handleControlledInputChange = (event) => {
      event.preventDefault()

      let selectedVal = event.target.value
      if (event.target.id.includes("Id")) {
        selectedVal  = parseInt(selectedVal )
    }

      setMovieId(selectedVal)
  }
  
  // returns search for filtered movies & maps through filtered movies with button to add and grab id and properties from API
    return (
      <>
        <div className ="movie__search">Search for a movie:
          <input type="text"
            className="input--wide"
            onKeyUp={(event) => {
              if (event.target.value !== "") {
                searchMovie(event.target.value)
              } else {setFilteredMovies([])}
            }
            
          }
            placeholder="Search for a movie... " />
        </div>
        <div className="searched__movies">
              {filteredMovies.map(movie =>

              <div className="searched__movieContainer">
                {movie.poster_path === null ? `No image available for ${movie.title}` :
                <img className="filtered__moviePoster" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}></img>}

                  <label htmlFor="add"></label>
                  <button id="movieId" className="add__movieButton"
                    onClick={handleControlledInputChange}
                    value={movie.id}>Add</button>
              </div>
              )}
        </div>
      </>
    )
  }