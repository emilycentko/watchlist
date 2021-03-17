import React from "react"
import { Route } from "react-router-dom"
import { HomePage } from "./HomePage"
import { MovieProvider } from "./movies/MovieProvider"
import { WatchList } from "./watchlists/WatchList"

export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}

            <MovieProvider>
                <Route exact path="/">
                    <HomePage />
                    <WatchList />
                </Route>
            </MovieProvider>
        </>
    )
}
