import React, { useContext, useEffect, useState } from "react"
import { useHistory} from "react-router-dom"
import { MovieCard } from "../movies/Movie"
import { WatchListContext } from "./WatchListProvider"
import { WatchListMovieContext } from "./WatchListMovieProvider"
import { userStorageKey } from "../auth/authSettings";
import { UserContext } from "../users/UserProvider"
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import cyan from '@material-ui/core/colors/cyan';
import "./WatchList.css"
import { blue } from "@material-ui/core/colors"

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

export const WatchList = () => {

    const classes = useStyles()

    const { watchLists, getWatchLists, deleteWatchList } = useContext(WatchListContext)
    const { getWatchListMovies} = useContext(WatchListMovieContext)
    const { getUsers } = useContext(UserContext)

    const userId = parseInt(sessionStorage.getItem(userStorageKey))
  
    const history = useHistory()

    useEffect(() => {
        getUsers()
        .then(getWatchLists)
        .then(getWatchListMovies)
    }, [])


    /* getWatchLists fetch call for watch lists embeds the join table
    watchListMovies, which contains array of movies within that watch list,
    filtering watch lists for that user.
    
    Return maps over watchLists and grabs the data associated with all movies
    in each watch list from that join table */

    // Then maps over MovieCard from Movie.js to supply its key/value

    // Includes edit watch list name button & delete button

    return (

        <>
            <div className="watchlists">
            <Button variant="contained" color="secondary" className={classes.createButton} style={{margin: 20}}
                onClick={() => {history.push("/watchlists/create")}}>Create a New WatchList
            </Button>
            </div>
            <div className="watchlist__list">

                {watchLists.filter(watchList => watchList.userId === userId).map(watchList => {
                   

                    return <div className ="watchlist">
                                <div>
                                    <h3 className="watchlist__name">{watchList.name}</h3>

                                    <div className="watchlist__buttons">
                                        <Button variant="contained" color="secondary" className={classes.button} style={{margin: 20}}
                                            onClick={() => {
                                            history.push(`/watchlists/edit/${watchList.id}`)
                                            }}>Edit WatchList Name
                                        </Button>

                                        <Button variant="contained" color="secondary" className={classes.button} style={{margin: 20}}
                                            onClick= {() => 
                                            deleteWatchList(watchList.id)}>
                                            Delete WatchList
                                        </Button>
                                    </div>
                                </div>
                            {console.log(watchList.watchListMovies)}
                                {watchList.watchListMovies.map(movie => <MovieCard key={movie.id} movie={movie}/>)}
                            </div>
                })
                }
            </div>
        </>
    )
}
