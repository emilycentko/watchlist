import React, { useContext } from "react"
import { MovieContext } from "./MovieProvider"
import { useHistory } from "react-router-dom"

export const MovieSearch = () => {
    const { searchMovie, filteredMovies, setFilteredMovies } = useContext(MovieContext)

    const history = useHistory()
  
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
              <div>
              <img className="filtered__movies" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}></img>
                <button
                  onClick={() => {
                    history.push(`/watchlists`)
                  }}>Add Movie
                </button>
              </div>
              )}
        </div>
      </>
    )
  }