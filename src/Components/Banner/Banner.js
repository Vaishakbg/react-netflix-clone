import axios from '../../axios';
import React, { useEffect, useState } from 'react';
import './Banner.css';
import { API_KEY, imageUrl } from '../../constants/constants';

function Banner() {
  const [movie, setMovie] = useState();
  useEffect(()=>{
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((res)=>{
      setMovie(res.data.results[6])
    })
  }, [])
  return (
    <div className='banner' style={{backgroundImage:`url(${movie && imageUrl+movie.backdrop_path})`}}>
        <div className="content">
            <h1 className="title">{movie && (movie.title ? movie.title : movie.name)}</h1>
            <div className="banner-button">
            <button className="button">Play</button>
            <button className="button">My List</button>
            </div>
            <h2 className="description">{movie && movie.overview}</h2>
        </div>
        <div className="fade-bottom">

        </div>
    </div>
  )
}

export default Banner