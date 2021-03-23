import React from "react"
import { Route } from "react-router-dom"
import { HomePage } from "./HomePage"
import { MovieProvider } from "./movies/MovieProvider"
import { WatchList } from "./watchlists/WatchList"
import { WatchListProvider } from "./watchlists/WatchListProvider"
import { WatchListMovieProvider } from "./watchlists/WatchListMovieProvider"
import { AddMovieForm } from "./movies/MovieForm"
import { UserProvider } from "./users/UserProvider"
import { WatchListForm } from "./watchlists/WatchListForm"
import { MovieDetails } from "./movies/MovieDetails"

export const ApplicationViews = () => {
    return (
        <>
            <UserProvider>
                <WatchListMovieProvider>     
                    <MovieProvider>
                        <WatchListProvider>
                            <Route exact path="/">
                                <HomePage />
                        
                                <AddMovieForm />
                            </Route>

                            <Route exact path="/watchlists">
                                <WatchList />
                            </Route>

                            <Route exact path="/watchlists/create">
                                <WatchListForm />
                            </Route>

                            <Route path="/watchlists/edit/:watchListId(\d+)">
                                <WatchListForm />
                            </Route>

                            <Route path="/watchlists/moviedetails/:movieId(\d+)/:id(\d+)">
                                <MovieDetails />
                            </Route>
                        </WatchListProvider>
                    </MovieProvider>
                </WatchListMovieProvider>
            </UserProvider>
        </>
    )
}
