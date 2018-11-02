import React from 'react';
import { Link } from 'react-router-dom';
import { dateRange } from '../../util/gen_util';

const RecentAdditions = (props) => {
  
  const orderedMovies = props.recentMovies.sort((movie1, movie2) => {
    return Date.parse(movie2.created_at) - Date.parse(movie1.created_at);
  });

  return (
    <div className='glass-pane' id='recent-container'>
      <div className='glass-container flex-column percent-w-100'>
        <h4>recent entries</h4>
        <div className='flex-column-center percent-w-100'>
          <div className='flex-row-space-between' id='recent-row'>
            {
              orderedMovies.map((movie, idx) => {
                if (idx >= 5) return;
                return (
                  <Link className='flex-column-center' id='recent-pane' to={`/movie/${movie.id}`}>
                    <h5>{movie.title}</h5>
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}></img>
                    <h5>{dateRange(movie.start_year, movie.end_year)}</h5>
                  </Link>
                );
              })
            }
          </div>
          <div className='flex-row-space-between' id='recent-row'>
            {
              orderedMovies.map((movie, idx) => {
                if (idx < 5) return;
                return (
                  <Link className='flex-column-center' id='recent-pane' to={`/movie/${movie.id}`}>
                    <h5>{movie.title}</h5>
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}></img>
                    <h5>{dateRange(movie.start_year, movie.end_year)}</h5>
                  </Link>
                );
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentAdditions;
