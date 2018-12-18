import React, { Component } from 'react';
import './App.css';
 import CustomersCollection from './components/CustomersCollection.js';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';


//const Customers1 = () => <h2>customers</h2>;



class App extends Component {

  // state = {
  //   customers: []
  // }

  render() {
    return (

      <Router>

      <div className="App">

        <Link to={'/customers'}>Customers</Link>
        <Route path="/customers" component={CustomersCollection }/>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>

    </Router>
    );
  }
}

export default App;
