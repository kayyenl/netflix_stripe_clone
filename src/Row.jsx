import axios from './axios'
import React, { useEffect, useState } from 'react'

function Row( {title, fetchUrl, isLarge = false} ) {
    const [movies, setMovies] = useState([])
    const base_url = "https://image.tmdb.org/t/p/original/"

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
            return request
        }

        fetchData()
    }, [fetchUrl])


    console.log(movies)
  return (
    <div className='row'>
        <h1 className='row__name'>{title}</h1>

        <div className="row__posters">
          {movies.map(movie => (
            (((isLarge && movie.poster_path) ||
            (!isLarge && movie.backdrop_path)) && (<img 
            className={`row__poster ${isLarge && "row__poster--large"}`} 
            key={movie.id}
            src={`${base_url}${isLarge ? movie?.poster_path : movie?.backdrop_path}`} 
            alt={movie.name} />))
          ))}
        </div>
    </div>
  )
}

export default Row