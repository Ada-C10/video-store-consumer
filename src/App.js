import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import RentalLibrary from './component/RentalLibrary';
import AllCustomers from './component/AllCustomers'
import Navbar from './component/Navbar'
import SearchBar from './component/SearchBar'
import CheckOut from './component/CheckOut'

import './App.css';

class App extends Component {
    constructor() {
      super();
      this.state = {
        isReavelad: false,
        currentCustomer: {},
        currentMovie: {},
      }
    }

  onCheckOutCallback = (customer) => {
    this.setState({
      currentCustomer: customer
    })
  }

  onMovieCheckOut = (movie) => {
    this.setState({
      currentMovie: movie
    })
  }

  render() {
    return (
      <div className="App">
      <Router>
        <div>
          <Navbar
          allMovies={<Link to="/library" >All Rentals</Link>}
          customers={<Link to="/customer" >Customer List</Link>}
          search={<Link to="/search">Search Movies</Link>}
          />


          <div> <CheckOut
          currentMovie={this.state.currentMovie}
          currentCustomer={this.state.currentCustomer}
          />
          </div>

          <div>
            <Route path="/search"
            render={() =>
              <SearchBar /> }
            />
          </div>

            <div>
              <Route path="/customer"
              render={() =>
                <AllCustomers
                updatedCustomerCallback={this.onCheckOutCallback}
                />
              }
              />
            </div>

            <div>
              <Route path="/library"
              render={() =>
                <RentalLibrary
                updatedMovieCallback={this.onMovieCheckOut}
                />
              }/>
            </div>

          </div>
          </Router>
      </div>
    );
  }
}



export default App;
