import React, { useContext } from "react"
import { MovieContext } from "./MovieProvider"

export const MovieSearch = () => {
    const { setSearchTerms } = useContext(MovieContext)
  
    return (
      <>
        <div className ="movie__search">Search for a movie:
        <input type="text"
          className="input--wide"
          onKeyUp={(event) => setSearchTerms(event.target.value)}
          placeholder="Search for a movie... " />
          </div>
      </>
    )
  }