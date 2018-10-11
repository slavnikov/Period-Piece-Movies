import React from 'react';
import { Link } from 'react-router-dom';

const OurMovies = (props) => {
  return (
    <ul>
      {props.ourMovieIDs.map((movieID, idx) => {
        return (
          <li key={idx}><Link key={idx} to={`/movie/${movieID}`}>{props.movies[movieID].title}</Link></li>
        );
      })}
    </ul>
  );
};

export default OurMovies;
