import React, { useContext, useState } from "react"
import { MovieContext } from "./MovieProvider"
import { useHistory } from "react-router-dom"

//component responsible for searching a movie and displaying filtered movies with a button to add
//called in MovieForm

export const MovieSearch = () => {
    const { movies, searchMovie, filteredMovies, setFilteredMovies } = useContext(MovieContext)
    const history = useHistory()

    const [movie, setMovie] = useState({
      movieId: 0,
      poster_path: ""
    })


    const handleControlledInputChange = (event) => {
      const newMovie = { ...movie }
      let selectedVal = event.target.value

      if (event.target.id.includes("Id")) {
        selectedVal  = parseInt(selectedVal )
    }

      newMovie[event.target.id] = selectedVal
      setMovie(newMovie)
  }
  
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
                  <input type ="button" id={movie.id} className="add__movieButton"
                    onClick={handleControlledInputChange}
                    value="Add"/>
              </div>
              )}
        </div>
      </>
    )
  }