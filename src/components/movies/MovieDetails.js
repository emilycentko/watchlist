import React, { useContext, useEffect, useState } from "react"
import { MovieContext } from "./MovieProvider"
import { useParams, useHistory } from "react-router-dom"
import { WatchListMovieContext } from "../watchlists/WatchListMovieProvider"
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'


/* Component responsible for displaying details for one movie
after movie poster is selected from Movie.js/WatchList page */

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        // margin: theme.spacing(1),
        width: '40ch',
      },
    button: {
        marginLeft: 30,
        },
    createButton: {
        marginLeft: 40, 
    }
    },
  }));

export const MovieDetails = ({watchListMovieId}) => {
    const { getSearchedMovieById } = useContext(MovieContext)
    const { removeMovie } = useContext(WatchListMovieContext)
  
    const [movie, setMovies] = useState({})
  
    const classes = useStyles()
    

    /* Params for the URL to create a dynamic route that included
    the id that I need for both tmdb id and local JSON relationship id */

    const {movieId, id} = useParams()
    const history = useHistory()

    //get that movie id from tmdb and set state
    useEffect(() => {
        
        getSearchedMovieById(movieId)
        .then((response) => {
          setMovies(response)
        })
        }, [])


    //year only
    const year = new Date(`${movie.release_date}`)

    console.log(id)
        
    //details and delete movie
    return (
        
        <section className="movie__details">
            <img className="movie__poster" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
            <h3>{movie.title}</h3>
            <div>{year.getFullYear()}</div>
            <div>{movie.runtime} minutes</div>
            <div>{movie.overview}</div>
    
            <Button variant="contained" color="primary" className={classes.addButton} style={{margin: 20, color: "#ffca28", fontWeight: "bold", border: "solid #ffca28 2px"}}
                onClick={() => {
                removeMovie(id)
                .then (() =>
                    history.push(`/watchlists`)
                )}}>Remove
            </Button>
            
        </section>
    )
}