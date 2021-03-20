import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "./users/UserProvider"
import { userStorageKey } from "./auth/authSettings"

export const HomePage = () => {

    const { users, getUsers } = useContext(UserContext)
    const [user, setUser] = useState({
        firstName: ""
    })

    //gets user's id
    const userId = parseInt(sessionStorage.getItem(userStorageKey))

    useEffect(() => {
        getUsers()
    }, [])

    useEffect(() => {
        const currentUser = users.find(user => user.id === userId)
        if(currentUser) setUser(currentUser)
    }, [users])


    return (
        <>
            <h2>WatchList</h2>
            
            <h3>Welcome, {user.name}</h3>
        </>
    )
}