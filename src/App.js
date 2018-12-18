import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Library from './components/Library';
import CustomerList from './components/CustomerList';
import Search from './components/Search';
import Home from './components/Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Video Consumer Placeholder Title</h1>
            <nav className="navbar">
              <ul>
                <li><Link to="/">Homepage</Link></li>
                <li><Link to="/library">Library</Link></li>
                <li><Link to="/search">Search</Link></li>
                <li><Link to="/customers">Customers</Link></li>
              </ul>
            </nav>
          </header>

          <Route path="/" exact component={Home} />
          <Route path="/library/" component={Library} />
          <Route path="/search/" component={Search} />
          <Route path="/customers/" component={CustomerList} />
        </div>
      </Router>
    );
  }
}

export default App;
