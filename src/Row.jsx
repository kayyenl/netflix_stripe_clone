import axios from './axios'
import React, { useEffect, useState } from 'react'

function Row( {title, fetchURL, isLarge = false} ) {
    const [movies, setMovies] = useState([])


    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchURL)
            setMovies(request.data.results)
            return request
        }

        fetchData()
    }, [fetchURL])


    console.log(movies)
  return (
    <div className='row'>
        <h1>{title}</h1>
    </div>
  )
}

export default Row