import React from 'react';
import { Link } from 'react-router-dom';

const TmdbMovies = (props) => {
  return (
    <ul>
      {props.tmdbMovies.map((tmdbMovie, idx) => {
        return (
          <li key={idx}><Link to={`/add_movie/${idx}`} key={idx}>{tmdbMovie.title}</Link></li>
        );
      })}
    </ul>
  );
};

export default TmdbMovies;
