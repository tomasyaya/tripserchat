import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import Bookies from './views/Bookies/Bookies';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

function App() {
  
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <Bookies />        
      </ErrorBoundary>
    </Provider>
  );
}

export default App;
