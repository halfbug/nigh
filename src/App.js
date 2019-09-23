import React from 'react';
import {BrowserRouter, Route } from 'react-router-dom'

import Home from './pages/Home';
import NearBy from './pages/NearBy';
import Register from './pages/Register';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Route path='/nearby' component= {NearBy} />
    <Route exact  path='/register' component= {Register} />
      <Route exact  path='/' component= {Home} />
     

    </div>
    </BrowserRouter>
  );
}

export default App;
