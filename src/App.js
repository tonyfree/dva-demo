import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import {Login} from './pages'
import './App.css';

const App = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/login">Login</Link></li>
      </ul>

      <hr/>

      <Route exact path="/login" component={Login}/>
    </div>
  </Router>
)

export default App;
