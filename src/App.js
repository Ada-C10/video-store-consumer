import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import RentalLibrary from './component/RentalLibrary';
import AllCustomers from './component/AllCustomers'
import SearchBar from './component/SearchBar'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/library">All Movies</Link></li>
              <li><Link to="/customer">Customer List</Link></li>
              <li><SearchBar /></li>



            </ul>
          </nav>
            <Route path="/search" component={SearchBar} />
            <Route path="/customer" component={AllCustomers} />
            <Route path="/library" component={RentalLibrary} />
          </div>
        </Router>

      </div>
    );
  }
}

export default App;
