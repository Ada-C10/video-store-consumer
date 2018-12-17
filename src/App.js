import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import './App.css';

import Home from './components/Home';
import Customers from './components/Customers';
import Library from './components/Library';
import Search from './components/Search';



class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/customers">Customers</Link>
            </li>
            <li>
              <Link to="/library">Library</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
          </ul>

          <hr />

          <Route exact path="/" component={Home} />
          <Route path="/customers" component={Customers} />
          <Route path="/library" component={Library} />
          <Route exact path="/search" component={Search} />
        </div>
      </Router>
    );
  }
}

export default App;
