import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from 'react-router-dom';
import { MovieContext } from "../movies/MovieProvider"
import { WatchListContext } from "./WatchListProvider"
import { WatchListMovieContext } from "./WatchListMovieProvider"
import { userStorageKey } from "../auth/authSettings";
import "./WatchList.css"
import { UserContext } from "../users/UserProvider"

//responsible for both adding a new watch list and editing one

export const WatchListForm = () => {

    const { addWatchList, getWatchListById, editWatchList } = useContext(WatchListContext)
    const { users, getUsers } = useContext(UserContext)

    const currentUserId =  parseInt(sessionStorage.getItem(userStorageKey))

    const [watchList, setWatchList] = useState({
        name: "",
        userId: currentUserId
    })

    const [isLoading, setIsLoading] = useState(true);
    const { watchListId } = useParams();
	  const history = useHistory();

    const handleControlledInputChange = (event) => {
        const newWatchList = { ...watchList }

        newWatchLis[event.target.id] = event.target.value
       
        setWatchList(newWatchLis)
    }

    const handleSaveWatchList = () => {

        if (watchList.name === "") {
            window.alert("You gotta name it!")
          } else {
            setIsLoading(true);
  
        if (watchListId){
            
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

  return (
    <form className="watchListForm">
        <h2 className="watchListForm__title">{watchListId ? "Edit WatchList" : "Add New WatchList"}</h2>
        <fieldset>
            <div className="form-group">
                <label htmlFor="name">WatchList name:</label>
                <input type="text" id="name" required autoFocus className="form-control" placeholder="WatchList name"
                onChange={handleControlledInputChange}
                value={watchList.name}/>
            </div>
        </fieldset>

        <button className="btn btn-primary"
            disabled={isLoading}
            onClick={event => {
                event.preventDefault()
                handleSaveWatchList()
            }}>
            {watchListId ? "Save WatchList" : "Add New WatchList"}</button>
    </form>
)

}