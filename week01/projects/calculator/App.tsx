import React, {useState} from 'react';
import {store} from './src/store/store';
import Calculator from './src/Calculator';
import {Provider} from 'react-redux';

function App(): JSX.Element {
  //App
  return (
    <Provider store={store}>
      <Calculator></Calculator>
    </Provider>
  );
}

export default App;
