import React from "react"
import { Route } from "react-router-dom"
import { HomePage } from "./HomePage"

export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}

            <Route exact path="/">
                <HomePage />
            </Route>
        </>
    )
}
