import React from "react"
import { Route } from "react-router-dom"
import { HomePage } from "./HomePage"
import { MovieProvider } from "./movies/MovieProvider"
import { WatchList } from "./watchlists/WatchList"
import { WatchListProvider } from "./watchlists/WatchListProvider"

export const ApplicationViews = () => {
    return (
        <>

            <MovieProvider>
                <WatchListProvider>
                    <Route exact path="/">
                        <HomePage />
                    </Route>

                    <Route exact path="/watchlists">
                        <WatchList />
                    </Route>
                </WatchListProvider>
            </MovieProvider>
        </>
    )
}
