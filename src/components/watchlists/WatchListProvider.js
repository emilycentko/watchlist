import React, { useState, createContext } from "react"

export const WatchListContext = createContext()

export const WatchListProvider = (props) => {
    const [watchLists, setWatchLists] = useState([])

    const getWatchLists = () => {
        return fetch("https://watchlists-api.herokuapp.com/watchLists?_embed=watchListMovies")
            .then(res => res.json())
            .then(setWatchLists)
    }

    const addWatchList = watchList => {
        return fetch("https://watchlists-api.herokuapp.com/watchLists", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
                body: JSON.stringify(watchList)
            })
            .then(getWatchLists)
    }

    const getWatchListById = (id) => {
        return fetch(`https://watchlists-api.herokuapp.com/watchLists/${id}?_embed=watchListMovies`)
            .then(res => res.json())
    }

    const editWatchList = watchList => {
        return fetch(`https://watchlists-api.herokuapp.com/watchLists/${watchList.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(watchList)
        })
          .then(getWatchLists)
      }

    const deleteWatchList = id => {
        return fetch(`https://watchlists-api.herokuapp.com/watchLists/${id}`, {
            method: "DELETE"
        })
        .then(getWatchLists)
    }


    /*return a context provider, which has the `watchlists` state & the
    function keys to allow any child elements to access them
    */
    return (
        <WatchListContext.Provider value={{
            watchLists, getWatchLists, addWatchList, getWatchListById, editWatchList, deleteWatchList
        }}>
            {props.children}
        </WatchListContext.Provider>
    )
}