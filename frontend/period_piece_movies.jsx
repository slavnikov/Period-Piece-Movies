import React from 'react';
import ReactDOM from 'react-dom';
import Linker from './components/linker';
import configureStore from './store/store';

import { fetchMovie } from './actions/movie_actions';

const store = configureStore();

window.getState = store.getState;
window.dispatch = store.dispatch;

window.fetchMovie = fetchMovie;


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');

  ReactDOM.render(<Linker store={store}/>, root);
});
