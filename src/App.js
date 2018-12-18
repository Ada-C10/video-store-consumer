import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Customers from './components/Customers.js';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';


const Customers1 = () => <h2>customers</h2>;



class App extends Component {

  // state = {
  //   customers: []
  // }

  render() {
    return (

      <Router>

      <div className="App">

        <Link to={'/customers1'}>Customers</Link>
        <Route path="/customers1" component={Customers1}/>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>

    </Router>
    );
  }
}

export default App;
