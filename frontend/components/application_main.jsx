import React from 'react';
import { Route } from 'react-router-dom';
import MovieSearch from './movie_search/movie_search_container';
import MovieVE from './movie_view_edit/movie_ve_container';

const ApplicationMain = (props) => {
  return (
    <div>
      <Route path='/movie_search' component={MovieSearch}/>
      <Route path='/movie/:movie_id' component={MovieVE}/>
    </div>
  );
};

export default ApplicationMain;
