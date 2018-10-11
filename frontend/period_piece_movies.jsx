import React from 'react';
import ReactDOM from 'react-dom';
import Linker from './components/linker';
import configureStore from './store/store';

import { searchByDateRange } from './actions/search_actions';

const store = configureStore();

window.getState = store.getState;
window.dispatch = store.dispatch;

window.searchByDateRange = searchByDateRange;


document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Linker store={store}/>, root);
});
