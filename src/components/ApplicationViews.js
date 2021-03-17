import React from "react"
import { Route } from "react-router-dom"
import { HomePage } from "./HomePage"
import { MovieProvider } from "./movies/MovieProvider"
import { WatchList } from "./watchlists/WatchList"
import { WatchListProvider } from "./watchlists/WatchListProvider"

export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}

            <MovieProvider>
                <WatchListProvider>
                    <Route exact path="/">
                        <HomePage />
                    </Route>

            {/* Render the location list when http://localhost:3000/watchlists */}

                    <Route path="/watchlists">
                        <WatchList />
                    </Route>
                </WatchListProvider>
            </MovieProvider>
        </>
    )
}
