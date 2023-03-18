import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer"

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
    //  here we are carching which ia comming from the
    //                               Row tag which is in app.js and we are using it here (endpoints also)
    const [movies, setMovies] = useState([]);
    /* hre we are recing array of movies so we used array here [] */
    // we have needed some snippet of code which will
    // exicute on some condition thats why we have used use effect

    const [trailerUrl, setTrailerUrl] = useState("");
    useEffect(() => {
        // when this row componant loads we want this code to be exicuted
        // mhanje jevhaa row screen var yenar load honar tevha ha code exicute honar
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            //axios.get()--> "http://api.themoviesdb.org/3"
            //fetchUrl--> app.js madhun ji ali utl  request.js madhli kuthali pn ji ya row
            //sthi ali ti apend karnar tya axios ne alelya base url la
            // console.log(request); // just cheaking perpose mhanje aky data yetay te chek karta yena
            // brouser console madhe data result madhe
            setMovies(request.data.results);

            return request;
        }
        fetchData(); //call to upper async fuction
    }, [fetchUrl]); //ethe [] blank thevla mhanje run only once when this row componant relodes
    // jar ethe [movies] dila mhanje run these code evry time this movie changes or relodes
    //   console.log(movies);

    const opts = {
        height: "390",
        width: "640",
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
            quality: 'small'
        }
    };

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl('');
            //means if it has alredy palaying ie havng the trailerUrl
            //then set it as empty
        } else {
            movieTrailer(movie?.title || movie?.name || movie?.original_name || "")
                .then((url) => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get('v'));
                })
                .catch((error) => console.log(error));
        }
    };
    /*new URL(url) creates a new URL object from the given url.
      .search returns the query string portion of the url, including the leading ?.
      new URLSearchParams() creates a new URLSearchParams object, which can be used to
       parse and manipulate query string parameters.The URLSearchParams constructor is 
       passed the query string extracted from the original url by new URL(url).search. 
       This initializes the URLSearchParams object with the query string parameters from the url. */


    return (
        <div className="row">
            <h2 className="title">{title}</h2>
            <div className="row_posters">
                {movies.map((movie) => {
                    return (
                        <img
                            key={movie.id} //while rendering in reaact just give this key not compalsury but
                            //when u use this when any change happen in this only this componat will render not other
                            //means only to optimise and it is unique key to that componant
                            onClick={() => handleClick(movie)}
                            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                            src={`${base_url}${
                                isLargeRow ? movie.poster_path : movie.backdrop_path
                                }`}
                            alt={movie.name}
                        />
                    ); //ehe thoda problem dety
                    //    poster_pth url nhi dety jas base url kela hoata tsa ethe pan yachya adhi dusra aae te
                    // TMDB chya docs mdhun shodha lagty var lih;ay bagha
                })}
        ;
      </div >
            <div style={{ padding: "40px" }}>
                {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
            </div>
        </div>
    );
}

export default Row;
