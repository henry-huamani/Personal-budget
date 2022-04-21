import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Resultant from './components/Resultant';

function App() {
  return (
    <React.Fragment>
      <Route path="/home" component={NavBar} />
      <Route exact path="/home" component={Resultant} />
    </React.Fragment>
  );
}

export default App;
