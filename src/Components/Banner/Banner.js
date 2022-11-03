import React from 'react';
import './Banner.css';

function Banner() {
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