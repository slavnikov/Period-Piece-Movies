import React from 'react';
import { Route } from 'react-router-dom';
import MovieSearch from './movie_search/movie_search_container';

const ApplicationMain = (props) => {
  return (
    <div>
      <Route path='/movie_search' component={MovieSearch}/>
    </div>
  );
};

export default ApplicationMain;
