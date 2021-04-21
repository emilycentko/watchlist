import React, { useContext } from "react"
import { MovieContext } from "./MovieProvider"
import { WatchListMovieContext } from "../watchlists/WatchListMovieProvider"
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles';

/* Component responsible for 1. searching a movie and displaying
filtered movies 2. with a button to add movie to a WatchListForm.js.
Function called in MovieForm */

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export const MovieSearch = () => {
    const { searchMovie, filteredMovies, setFilteredMovies } = useContext(MovieContext)
    const { setMovieId } = useContext(WatchListMovieContext)

    const classes = useStyles();

    // Handles grabbing movieId value and setting new movieId state upon selection
    const handleControlledInputChange = (event) => {
      event.preventDefault()

      let selectedVal = event.target.value
      if (event.target.id.includes("Id")) {
        selectedVal  = parseInt(selectedVal )
    }

      // Update state to THAT selected movie by tmdb id
      setMovieId(selectedVal)
  }
  
  /* 1. Returns search for filtered movies & maps through filtered movie posters,
  each with a button to add and grab id and its properties from tmdb */
    return (
      <>
        <div className="add__movieHeading">
        Add a movie:
        </div>
        <div className ="movie__search">
          <TextField id="standard-basic" label="Search for a movie"
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
                {movie.poster_path === null ? "" :
                  <img className="filtered__moviePoster" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}></img>}
                
                {movie.poster_path === null ? "" :
                <p className="search_title">{movie.title}</p>}
                
                {movie.poster_path === null ? "" :
                
                <button id="movieId" className="add__movieButton" value={movie.id}
                  onClick=
                  {handleControlledInputChange}>
                + 
                </button>}
              </div>
              )}
        </div>
      </>
    )
  }