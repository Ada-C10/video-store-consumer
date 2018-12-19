import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import MovieLibrary from './components/MovieLibrary.js';
import CustomerLibrary from './components/CustomerLibrary.js';
import Search from './components/Search.js';

const libraryConst = () => (
  <div>
    <MovieLibrary/>
  </div>
);

const customerConst = () => (
  <div>
    <CustomerLibrary/>
  </div>
);

const searchConst = () => (
  <div>
    <Search/>
  </div>
);

class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/">Movie Library</Link></li>
          <li><Link to="/customers">Customers</Link></li>
          <li><Link to="/search">Search</Link></li>
        </ul>

        <Route path="/" exact component={libraryConst}/>
        <Route path="/customers" component={customerConst}/>
        <Route path="/search" component={searchConst}/>
      </div>
    );
  }
}

export default App;
