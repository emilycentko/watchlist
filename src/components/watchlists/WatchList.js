import React, { useContext, useEffect, useState } from "react"
import { useHistory} from "react-router-dom"
import { MovieCard } from "../movies/Movie"
import { WatchListContext } from "./WatchListProvider"
import { WatchListMovieContext } from "./WatchListMovieProvider"
import { userStorageKey } from "../auth/authSettings";
import { UserContext } from "../users/UserProvider"
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import "./WatchList.css"

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
    const { watchListMovies, getWatchListMovies} = useContext(WatchListMovieContext)
    const { getUsers } = useContext(UserContext)

    const [watchListMovie, setWatchListMovies] = useState([])

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
            <Button variant="contained" color="primary" className={classes.addButton} style={{margin: 40, padding: 10, color: "#ffca28", fontWeight: "bold", border: "solid #ffca28 2px"}}
                onClick={() => {history.push("/watchlists/create")}}>Create a New WatchList
            </Button>
            </div>
            <div className="watchlist__list">

                {watchLists.filter(watchList => watchList.userId === userId).map(watchList => {
                   

                    return <div className ="watchlist">
                                <div className="single__watchlist">
                                    <h2 className="watchlist__name">{watchList.name}</h2>

                                    <div className="watchlist__buttons">
                                        <Button variant="contained" color="primary" className={classes.addButton} style={{margin: 20, color: "#ffca28", fontWeight: "bold", border: "solid #ffca28 2px"}}
                                            onClick={() => {
                                            history.push(`/watchlists/edit/${watchList.id}`)
                                            }}>Edit WatchList Name
                                        </Button>

                                        <Button variant="contained" color="primary" className={classes.addButton} style={{margin: 20, color: "#ffca28", fontWeight: "bold", border: "solid #ffca28 2px"}}
                                            onClick= {() => 
                                            deleteWatchList(watchList.id)}>
                                            Delete WatchList
                                        </Button>
                                    </div>
                                </div>
                                
                                    {watchList.watchListMovies.map(movie => <MovieCard key={movie.id} movie={movie}/>)}
                                
                            </div>
                })
                }
            </div>
        </>
    )
}