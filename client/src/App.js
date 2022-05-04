import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Resultant from './components/Resultant';
import OperationsFilter from './components/OperationsFilter';
import About from './components/About';

function App() {
  return (
    <React.Fragment>
      <Route path="/home" component={NavBar} />
      <Route exact path="/home" component={Resultant} />
      <Route exact path="/home/operations" component={OperationsFilter} />
      <Route exact path="/home/about" component={About} />
    </React.Fragment>
  );
}

export default App;
