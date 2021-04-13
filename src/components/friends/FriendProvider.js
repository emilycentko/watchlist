import React, { createContext, useState } from "react"

export const FriendContext = createContext()

export const FriendProvider = (props) => {

    const [friends, setFriends] = useState([])

    const getFriends = () => {
        return fetch("http://localhost:8088/friends")
        .then(res => res.json())
        .then(setFriends)
    }

    const addFriend = (friendObj) => {
        return fetch("http://localhost:8088/friends", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(friendObj)
        })
        .then(getFriends)
    }


    const removeFriend = (id) => {
        return fetch(`http://localhost:8088/friends/${id}`, {
          method: "DELETE"
        })
        .then(getFriends)
      }

    return (
        <FriendContext.Provider value={{
            friends, getFriends, addFriend, removeFriend
        }}>
            {props.children}
        </FriendContext.Provider>
    )
}