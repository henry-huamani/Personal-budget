import React from 'react';
import './App.css';
import {Route, Redirect} from 'react-router-dom';
import NavBar from './components/NavBar';
import Resultant from './components/Resultant';
import OperationsFilter from './components/OperationsFilter';
import About from './components/About';
import Home from './components/Home';

function App() {
  return (
    <React.Fragment>
      <Route exact path="/" render={() => document.cookie ? <Redirect to="/home" /> : <Home/>} />
      <Route path="/home" render={() => document.cookie ? <NavBar/> : <Redirect to="/" />} />
      <Route exact path="/home" render={() => document.cookie ? <Resultant/> : <Redirect to="/" />} />
      <Route exact path="/home/operations" render={() => document.cookie ? <OperationsFilter/> : <Redirect to="/" />} />
      <Route exact path="/home/about" render={() => document.cookie ? <About/> : <Redirect to="/" />} />
    </React.Fragment>
  );
}

export default App;
