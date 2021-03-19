import React, { useContext, useEffect, useState } from "react"
import { MovieContext } from "./MovieProvider"
import { useHistory, useParams } from 'react-router-dom'

// component responsible for searching and adding a movie in a form

export const MovieForm = () => {

    const { addMovie, getMovieById } = useContext(MovieContext)
    const { watchlists, getWatchLists } = useContext(WatchListContext)

    const [movie, setMovie] = useState({})
    
    const addMovie
    
    
    

}