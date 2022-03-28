import React from 'react';
import Main from './pages/Main';
import './App.css'
import store from './store';
import { Provider } from 'react-redux';


function App() {
  return (
    
      <Provider store={store} >
        <Main/>
      </Provider>
  
  );
}

export default App;

