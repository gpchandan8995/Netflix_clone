import React, { useState, useEffect } from 'react'
import axios from './axios';
import requests from './requests';
import "./Banner.css"

function Banner() {
    const [movie, setMovie] = useState([]);
    // we are using this for picking random movie from our movie 
    // list to display on banner
    
    useEffect(() => { //is for writting code whch runs based on some condition
        async function fetchData() {
            const request = await axios.get(requests.fetchHorrorMovies);
            setMovie(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length -1)
                ]
              );
              return request;
        //he math wala andarcha purn random selection sathi aae
    }
    fetchData();
  }, []); // empty karn ethe aaplyala kashachya specific yala render nhi karacha aani konty
    //prop pan nhi input ghety tr kashavr based rahacha prashnach nhi ajun elaboration sati row,js  madhala use effect bgha 
    // console.log(movie);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
      } //this fuction is written to limit the number of words diplaying on the 
      // banner and aslo appending three dot after that

  return(
      <header className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
        "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
        )`,
        backgroundPosition: "center center"
      }}> 
      {/* background image pahije manun header ghetla mhanje tyat chenge kela tar fakt background madhech honar andarchya parts mdhe nhii */}
          <div className="banner_contents">
        <h1 className="banner_title">
        {movie?.title || movie?.name || movie?.original_name}
            {/* this is to written like this if it dose not found one case it will go for other and othr like this */}
        </h1>
        {/* <div className="banner_buttons"> 
            <button className="banner_button">Play</button>
            <button className="banner_button">My List</button>
        </div> */}
        <h1 className="banner_description">{truncate(movie?.overview,150)}</h1>
          </div>
          <div className="banner_fadeBottom">
              {/* this div is just to fade bottom of banner */}
          </div>

      </header>
  )
}

export default Banner