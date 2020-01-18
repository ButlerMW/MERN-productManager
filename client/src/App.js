import React from 'react';
import { Router } from '@reach/router';
import Main from './views/Main'
import Details from './views/Details';
import Update from './views/Update';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="product" />
        <Details path="product/:id" /> 
        <Update path="product/:id/edit" />
      </Router>
    </div>
  );
}

export default App;
