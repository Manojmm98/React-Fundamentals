import logo from './logo.svg';
import React from 'react';
import './App.css';
// import provider from  and wrap div component with provider
import {Provider} from 'react-redux'
// import STORE
import Store from './redux/Store'

import CakeStore from './Components/CakeStore';

function App() {
  return (
    // wrap the div component inside provider and how provider will know about store so provide store as a props provider component
    <Provider store={Store} >
    <div className="App">
      <CakeStore/>
    </div>
    </Provider>

  )
}



export default App;
