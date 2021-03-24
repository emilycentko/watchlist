import React, { useState, createContext } from "react"

export const UserContext = createContext()

export const UserProvider = (props) => {

    // Sets state for users 
    const [users, setUsers] = useState([])

    // Get authenticated users
    const getUsers = () => {
        return fetch("http://localhost:8088/users")
            .then(res => res.json())
            .then(setUsers)
    }

    return (
        <UserContext.Provider value={{
            users, getUsers
        }}>
            {props.children}
        </UserContext.Provider>
    )

}