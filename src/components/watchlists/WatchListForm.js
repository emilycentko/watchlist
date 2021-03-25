import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from 'react-router-dom';
import { WatchListContext } from "./WatchListProvider"
import { userStorageKey } from "../auth/authSettings";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import cyan from '@material-ui/core/colors/cyan';
import "./WatchList.css"

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '40ch',
    },
  },
}));

// Component responsible for both adding a new watch list and editing an existing watch list title

export const WatchListForm = () => {

    const classes = useStyles();

    const { addWatchList, getWatchListById, editWatchList } = useContext(WatchListContext)

    const currentUserId =  parseInt(sessionStorage.getItem(userStorageKey))

    // Define initial state of form inputs
    const [watchList, setWatchList] = useState({
        name: "",
        userId: currentUserId
    })

    const [isLoading, setIsLoading] = useState(true);
    const { watchListId } = useParams();
	  const history = useHistory();

    const handleControlledInputChange = (event) => {
        const newWatchList = { ...watchList }

        newWatchList[event.target.id] = event.target.value
       
        setWatchList(newWatchList)
    }

    /*This function determines if this is a new watch list or an edit, prepares an object
    with new watch list data and invokes appropriate provider: edit or addWatchList */
    const handleSaveWatchList = () => {

        if (watchList.name === "") {
            window.alert("You gotta name it!")
          } else {
            setIsLoading(true);
  
        if (watchListId) {
            
            editWatchList({
                id: watchList.id,
                name: watchList.name,
                userId: currentUserId
            })
            .then(() => history.push(`/watchlists`))
          }else {
            
            addWatchList({
                name: watchList.name,
                userId: currentUserId
            })
            .then(() => history.push("/watchlists"))
          }
        }
      }

      /* Determine if this is an edit based on watchListId params in the URL.
        If true, invoke getWatchListById and then setWatchList state. */
      useEffect(() => {
        if (watchListId) {
          getWatchListById(watchListId)
          .then(watchList => {
              setWatchList(watchList)
              setIsLoading(false)
          })
        } else {
          setIsLoading(false)
      }
  }, [])

  // Form to edit watch list name
  return (
    <form className="watchListForm" className={classes.root} noValidate autoComplete="off">
        <h2 className="watchListForm__title">{watchListId ? "Edit WatchList Name" : "Add New WatchList"}</h2>
        <fieldset>
            <div className="form-group">
                <TextField id="name" label="WatchList Name" variant="outlined" className="form-control"
                onChange={handleControlledInputChange}
                value={watchList.name}/>
            </div>
        </fieldset>

        <Button variant="contained" color="secondary"
        className="btn btn-primary"
            disabled={isLoading}
            onClick={event => {
                event.preventDefault()
                handleSaveWatchList()
            }}>
            {watchListId ? "Save WatchList" : "Add New WatchList"}
          </Button>
    </form>
)

}