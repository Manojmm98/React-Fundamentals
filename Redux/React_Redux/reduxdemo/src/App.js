import logo from './logo.svg';
import React from 'react';
import './App.css';
// import provider from  and wrap div component with provider
import {Provider} from 'react-redux'
// import STORE
//import Store from './redux/Store'
import Store from './redux/IceCream/Store'

import CakeContainer from './Components/CakeContainer';
import HooksCakeContainer from './Components/HooksCakeContainer';
import IcecreamContainer from './Components/IceCream/IcecreamContainer';

function App() {
  return (
    // wrap the div component inside provider and how provider will know about store so provide store as a props provider component
    <Provider store={Store} >
    <div className="App">
      <CakeContainer/>
      {/* <HooksCakeContainer/> */}
      <IcecreamContainer/>
    </div>
    </Provider>

  )
}



export default App;
