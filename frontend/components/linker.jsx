import React from 'react';
import ApplicationMain from './application_main';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

const Linker = ({ store }) => {
  return (
    <Provider store ={store}>
      <HashRouter>
        <ApplicationMain/>
      </HashRouter>
    </Provider>
  );
};

export default Linker;
