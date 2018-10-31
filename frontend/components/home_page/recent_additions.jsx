import React from 'react';
import { Link } from 'react-router-dom';

const RecentAdditions = (props) => {
  return (
    <div className='glass-pane' id='recent-container'>
      <div className='glass-container flex-row-space-between percent-w-100'>
        <h4 className='vertical-text'>new entries</h4>
        {
          props.recentMovies.map((movie) => {
            return (
              <Link className='flex-column-center' id='recent-pane' to={`/movie/${movie.id}`}>
                <h5>{movie.title}</h5>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}></img>
                <h5>{movie.start_year} - {movie.end_year}</h5>
              </Link>
            );
          })
        }
      </div>
    </div>
  );
};

export default RecentAdditions;
