import React, { useEffect, useState } from 'react';
import './RowPost.css'
import axios from '../../axios';
import { API_KEY, imageUrl } from '../../constants/constants';
import YouTube from 'react-youtube';

function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState();

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  useEffect(() => {
    
    axios.get(props.url).then((res)=> {
      setMovies(res.data.results);
    }).catch(err=>{
      console.error(err.message)
    })
  }, []);

  const handleMovie = (id) => {
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(res=>{
      if(res.data.results.length !==0) {
        setUrlId(res.data.results[0])
      }
      console.log('Array empty');
    }).catch(err=>{
      console.log('No Trailer');
    })
  }
  
  return (
    <div className='row'>
        <h3>{props.title}</h3>
        <div className="posters">
          {
            movies.map((obj, index)=>
              <img onClick={()=>handleMovie(obj.id)} key={index} className={props.isSmall ? 'smallPoster':'poster'} src={`${imageUrl+obj.backdrop_path}`} alt={obj.name} />
            )
          }
        </div> 
        { urlId &&
        <div className='ytube-trailer-container'>
          <button className='button' onClick={()=>setUrlId()}>Close</button>
         <YouTube videoId={urlId.key} opts={opts} />
        </div>
        }
    </div>
  )
}

export default RowPost