import React from 'react';
import ReactDOM from 'react-dom';
import Linker from './components/linker';
import configureStore from './store/store';

const store = configureStore();

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Linker store={store}/>, root);
});
