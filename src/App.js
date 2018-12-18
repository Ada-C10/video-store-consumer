import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import RentalLibrary from './component/RentalLibrary';
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
            </ul>
          </nav>

            <Route path="/library" component={RentalLibrary} />
          </div>
        </Router>

      </div>
    );
  }
}

export default App;
