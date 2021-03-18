import React, { useState, createContext } from "react"

export const WatchListContext = createContext()

export const WatchListProvider = (props) => {
    const [watchLists, setWatchLists] = useState([])


    const getWatchLists = () => {
        return fetch("http://localhost:8088/watchlists?_embed=watchListMovies")
            .then(res => res.json())
            .then(setWatchLists)
    }

    const addWatchList = watchlist => {
        return fetch("http://localhost:8088/watchlists", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
                body: JSON.stringify(watchlist)
            })
            .then(getWatchLists)
        
    }


    /*return a context provider, which has the `watchlists` state & the
    function keys to allow any child elements to access them
    */
    return (
        <WatchListContext.Provider value={{
            watchLists, getWatchLists, addWatchList
        }}>
            {props.children}
        </WatchListContext.Provider>
    )
}