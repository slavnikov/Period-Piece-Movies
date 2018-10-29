import React from 'react';
import { Link } from 'react-router-dom';

const TmdbMovies = (props) => {
  return (
    <ul className='title-list'>
      {props.tmdbMovies.map((tmdbMovie, idx) => {
        return (
          <li key={idx}>
            <Link
              to={`/movie/new`}
              key={idx}
              onClick={() => {
                props.setTempMovie(tmdbMovie);
              }}>
              {tmdbMovie.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default TmdbMovies;
