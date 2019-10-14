import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import Bookies from './views/Bookies/Bookies';

function App() {
  
  return (
    <Provider store={store}>
      <Bookies />        
    </Provider>
  );
}

export default App;
