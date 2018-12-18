import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Customers from './components/Customers.js';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

class App extends Component {

  // state = {
  //   customers: []
  // }

  render() {
    return (

      <Router>

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <Customers />
        <Link to={'/customers'}></Link>
        <Route path="/customers" component={Customers}/>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>

    </Router>
    );
  }
}

export default App;
