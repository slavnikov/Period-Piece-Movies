import React from 'react';
import { Route } from 'react-router-dom';
import MovieSearch from './movie_search/movie_search_container';
import MovieVE from './movie_view_edit/movie_ve_container';
import MovieCreate from './movie_create/movie_create_container';
import PeriodSearch from './period_search/period_search_container';
import Header from './header/header';

const ApplicationMain = (props) => {
  return (
    <div>
      <Header/>
      <Route path='/movie_search' component={MovieSearch}/>
      <Route path='/period_search' component={PeriodSearch}/>
      <Route path='/movie/:movie_id' component={MovieVE}/>
      <Route path='/add_movie/:ref_movie_id' component={MovieCreate}/>
    </div>
  );
};

export default ApplicationMain;
