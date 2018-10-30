import React from 'react';

const RecentAdditions = (props) => {
  return (
    <div className='glass-pane'>
      <div className='glass-container flex-row'>
        {
          props.recentMovies.map((movie) => {
            return (
              <div className='flex-column-center' id='recent-pane'>
                <h5>{movie.title}</h5>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}></img>
                <h5>{movie.start_year} - {movie.end_year}</h5>
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default RecentAdditions;
