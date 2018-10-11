import React from 'react';

const OurMovies = (props) => {
  return (
    <ul>
      {props.ourMovieIDs.map((movieID, idx) => {
        return (
          <li key={idx}>{props.movies[movieID].title}</li>
        );
      })}
    </ul>
  );
};

export default OurMovies;
