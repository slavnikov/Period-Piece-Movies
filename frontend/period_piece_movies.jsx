import React from 'react';
import ReactDOM from 'react-dom';
import Linker from './components/linker';
import configureStore from './store/store';

import { fetchMovie } from './actions/movie_actions';
import { fetchLocation } from './api/external_requests';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');

  let preLoadedState = {};

  if (window.currentUser) {
    preLoadedState = {
      session: {
        currentUserId: window.currentUser.id
      },
      users: {
        [window.currentUser.id]: window.currentUser,
      }
    };
    delete(window.currentUser);
  }

  const store = configureStore(preLoadedState);

  window.getState = store.getState;
  window.dispatch = store.dispatch;

  ReactDOM.render(<Linker store={store}/>, root);
});
