import React from 'react';
import {store} from './src/store/store';
import {Provider} from 'react-redux';
import App from './src/App';

function AppWrapper(): JSX.Element {
  return (
    <Provider store={store}>
      <App></App>
    </Provider>
  );
}

export default AppWrapper;
