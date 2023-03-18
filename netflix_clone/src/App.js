import React from "react";
import Row from "./Row";
import "./App.css";
import requests from "./requests";
//import axios from 'axios'
//import request from './requests';
import Banner from "./Banner";
import Nav from "./Nav";
function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      {/* isLarge="true" or isLarge={true} as pan jamte */}
      <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending} isLargeRow />
      <Row title="TOP RATED" fetchUrl={requests.fetchTopRated} />
      <Row title="NETFLIX ORIGNALS" fetchUrl={requests.fetchNetflixOrignals} />
      <Row title="ACTION MOVIES" fetchUrl={requests.fetchActionMovies} />
      <Row title="COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies} />
      <Row title="HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="ROMANCE MOVIES" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="DOCUMENTRIES" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
