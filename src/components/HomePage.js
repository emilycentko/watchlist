import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "./users/UserProvider"
import { userStorageKey } from "./auth/authSettings"
import "./HomePage.css"

export const HomePage = () => {

    const { users, getUsers } = useContext(UserContext)
    const [user, setUser] = useState({
        firstName: ""
    })

    // Gets user's id
    const userId = parseInt(sessionStorage.getItem(userStorageKey))

    useEffect(() => {
        getUsers()
    }, [])

    // Establishes state of current authenticated user by id
    useEffect(() => {
        const currentUser = users.find(user => user.id === userId)
        if(currentUser) setUser(currentUser)
    }, [users])

    // User-specific welcome message 
    return (
        <>
            
            <h2>Welcome, {user.name}</h2>
        </>
    )
}