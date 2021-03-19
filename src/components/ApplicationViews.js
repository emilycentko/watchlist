import React from "react"
import { Route } from "react-router-dom"
import { HomePage } from "./HomePage"
import { MovieProvider } from "./movies/MovieProvider"
import { WatchList } from "./watchlists/WatchList"
import { WatchListProvider } from "./watchlists/WatchListProvider"
import { WatchListMovieProvider } from "./watchlists/WatchListMovieProvider"
import { MovieSearch } from "./movies/MovieSearch"
import { AddMovieForm } from "./movies/MovieForm"

export const ApplicationViews = () => {
    return (
        <>

            <WatchListMovieProvider>     
                <MovieProvider>
                    <WatchListProvider>
                        <Route exact path="/">
                            <MovieSearch />
                            <AddMovieForm />
                            <HomePage />
                        </Route>

                        <Route exact path="/watchlists">
                            <WatchList />
                        </Route>
                    </WatchListProvider>
                </MovieProvider>
            </WatchListMovieProvider>
        </>
    )
}
