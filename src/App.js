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
        errors: undefined
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

addError = (error) => {
  console.log('Here to add error')

  this.setState({errors: error})

  setTimeout(() =>
    this.setState({
      errors: undefined
    }),
    2500
  )
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


          { !this.isReavelad && <div className="checkout"> <CheckOut
          currentMovie={this.state.currentMovie}
          currentCustomer={this.state.currentCustomer}
          errorCatcherCallback={this.addError}
          />
          </div> }

          <section className="errorMessage">
            {console.log(this.state.error)}
            {this.state.errors ? `${this.state.errors}` : ``}
          </section>

          <div>
            <Route path="/search"
            render={() =>
              <SearchBar
              errorCatcherCallback={this.addError}
              /> }
            />
          </div>

            <div>
              <Route path="/customer"
              render={() =>
                <AllCustomers
                updatedCustomerCallback={this.onCheckOutCallback}
                errorCatcherCallback={this.addError}
                />
              }
              />
            </div>

            <div>
              <Route path="/library"
              render={() =>
                <RentalLibrary
                updatedMovieCallback={this.onMovieCheckOut}
                errorCatcherCallback={this.addError}
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
