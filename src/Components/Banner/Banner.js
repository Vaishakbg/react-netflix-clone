import axios from '../../axios';
import React, { useEffect } from 'react';
import './Banner.css';
import { API_KEY } from '../../constants/constants';

function Banner() {
  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((res)=>{
      console.log(res.data.results);
    })
  }, [])
  return (
    <div className='banner'>
        <div className="content">
            <h1 className="title">Movie Name</h1>
            <div className="banner-button">
            <button className="button">Play</button>
            <button className="button">My List</button>
            </div>
            <h2 className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus iste, rerum.</h2>
        </div>
        <div className="fade-bottom">

        </div>
    </div>
  )
}

export default Banner