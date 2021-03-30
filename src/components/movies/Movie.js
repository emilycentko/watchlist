import React, {useContext, useState, useEffect} from "react"
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import "./Movie.css"
import { MovieDetails } from "./MovieDetails";
import Button from '@material-ui/core/Button'
import { WatchListMovieContext } from "../watchlists/WatchListMovieProvider";

/* Responsible for representing HTML rendering of
ONE movie on the DOM under current user's watch list
and upon click --> MovieDetails.js */

const rand = () => {
    return Math.round(Math.random() * 20) - 10;
  }
  
  const getModalStyle = () => {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      textAlign: 'center'
    },
  }));
  
  export const MovieCard = ( {movie} ) => {

    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const [watchListMovie, setWatchListMovies] = useState({})

    const { removeMovie, getWatchListMovies } = useContext(WatchListMovieContext)
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    useEffect(() => {
        
      getWatchListMovies(movie.id)
      .then((response) => {
        setWatchListMovies(response)
      })
      }, [])

    console.log("movie", movie.id)
  
    const body = (
      <div style={modalStyle} className={classes.paper}>
        <MovieCard key={movie.movieId} movie={movie} />
        <MovieDetails key={movie.movieId} watchListMovieId={movie}/>
        <Button variant="contained" color="primary" className={classes.addButton} style={{margin: 20, color: "#ffca28", fontWeight: "bold", border: "solid #ffca28 2px"}}
            onClick={() => {
                removeMovie(movie.id)
                .then(() =>
                    handleClose()
                    
                )}}>Remove
            </Button>
        
      </div>
    );


  
    return (
      <div>

        <section className="movie__card">
                <img className="movie__poster" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            onClick={handleOpen}/>
        </section>
        
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {body}
        </Modal>
      </div>
    );
  }