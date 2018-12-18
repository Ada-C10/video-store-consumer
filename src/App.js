import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import './App.css';

import Home from './components/Home';
import Customers from './components/Customers';
import Library from './components/Library';
import Search from './components/Search';



class App extends Component {
  constructor(){
    super();

    this.state = {
      currentMovie: "none",
      currentCustomer: "none",
    }
  }

  selectMovie = (title) => {
    // console.log("Inside selectMovie", title);
    this.setState({currentMovie: title})
  }

  selectCustomer = (name) => {
    // console.log("Inside selectMovie", name);
    this.setState({currentCustomer: name})
  }

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
            <li>
              Selected Movie: {this.state.currentMovie}
            </li>
            <li>
              Selected Customer: {this.state.currentCustomer}
            </li>
          </ul>

          <hr />

          <Route exact path="/" component={Home} />
          <Route
            path="/customers"
            render={(props) => <Customers {...props}
            selectCustomer={ (name) => this.selectCustomer(name)}/>}
            />
          <Route
            path="/library"
            render={(props) => <Library {...props}
            selectMovie={ (title) => this.selectMovie(title)}/>}
          />
          <Route exact path="/search" component={Search} />
        </div>
      </Router>
    );
  }
}

export default App;
