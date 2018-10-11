import React from 'react';

const TmdbMovies = (props) => {
  return (
    <ul>
      {props.tmdbMovies.map((tmdbMovie, idx) => {
        return (
          <li key={idx}>{tmdbMovie.title}</li>
        );
      })}
    </ul>
  );
};

export default TmdbMovies;
