// import React, { useContext, useEffect, useState } from "react"
// import { MovieContext } from "./AnimalProvider"
// import { useParams, useHistory } from "react-router-dom"


// export const MovieDetail = () => {
//     const { getMovieById } = useContext(MovieContext)
  
//       const [movie, setMovies] = useState({})
  
//       const {movieId} = useParams()
//       const history = useHistory()

//       useEffect(() => {
//         console.log("useEffect", movieId)
//         getMovieById(movieId)
//         .then((response) => {
//           setMovies(response)
//         })
//         }, [])

// }