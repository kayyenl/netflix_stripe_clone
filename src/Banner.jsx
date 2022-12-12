import React, { useState, useEffect } from 'react'
import axios from './axios'
import requests from './request'

function Banner() {
    const [movie, setMovie] = useState([]);
    const baseImage = "https://image.tmdb.org/t/p/original"
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchTrending)
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            )
            return request
        }

        fetchData() 
    }, [])

    // console.log(movie)
    
    function truncate(string, n) {
        return string?.length > n ? string.substring(0, n-1) + '...' : string;
    }

    return (
    <header className='banner' style={{
        backgroundSize: "cover",
        backgroundImage: `url(${baseImage}${movie?.backdrop_path})`,
        backgroundPosition: "center top",
    }}>
        <div className="banner__contents">
            <h1 className="banner__title">
                {movie?.name || movie?.title || movie?.original_name}
            </h1>
            <div className="banner__buttons">
                <button className='banner__button'>Play</button>
                <button className='banner__button'>My List</button>
            </div>
            <h1 className="banner__description">
               {truncate(
                movie?.overview,150)}
            </h1> 
        </div>
        <div className="banner--fadebottom" />
        
    </header>
  )
}

export default Banner