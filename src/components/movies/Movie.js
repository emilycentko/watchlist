import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import "./Movie.css"
import { MovieDetails } from "./MovieDetails";

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
    },
  }));
  
  export const MovieCard = ( {movie} ) => {

    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const body = (
      <div style={modalStyle} className={classes.paper}>
        <MovieCard key={movie.movieId} movie={movie} />
        <MovieDetails movieId={movie.movieId} />
        
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