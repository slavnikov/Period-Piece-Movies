import React from 'react';
import ReactDOM from 'react-dom';
import Linker from './components/linker';
import configureStore from './store/store';

import { searchByName } from './actions/search_actions';

const store = configureStore();

window.getState = store.getState;
window.dispatch = store.dispatch;

window.searchByName = searchByName;


document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Linker store={store}/>, root);
});
