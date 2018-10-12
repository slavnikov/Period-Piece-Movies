import React from 'react';
import { Route } from 'react-router-dom';
import MovieSearch from './movie_search/movie_search_container';
import MovieVE from './movie_view_edit/movie_ve_container';
import MovieCreate from './movie_create/movie_create_container';

const ApplicationMain = (props) => {
  return (
    <div>
      <Route path='/movie_search' component={MovieSearch}/>
      <Route path='/movie/:movie_id' component={MovieVE}/>
      <Route path='/add_movie/:ref_movie_id' component={MovieCreate}/>
    </div>
  );
};

export default ApplicationMain;
