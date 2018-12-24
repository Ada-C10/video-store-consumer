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
  this.setState({errors: error})

  setTimeout(() =>
    this.setState({
      errors: undefined
    }),
    7000
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
          errors={this.state.errors ? `${this.state.errors}` : ``}
          />


          { !this.isReavelad && <div className="checkout"> <CheckOut
          currentMovie={this.state.currentMovie}
          currentCustomer={this.state.currentCustomer}
          errorCatcherCallback={this.addError}
          erros={this.state.errors ? `${this.state.errors}` : ``}
          />
          </div> }

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
          <audio controls autoPlay>
            <source src="https://t4.bcbits.com/stream/d9477fcf09cee0a5e20fb4df83fed430/mp3-128/67056078?p=0&ts=1545503066&t=fac502a030da0627f67edc867dc5de4bada0e57e&token=1545503066_0e7c7296e15da8a59299d52f308fe1030ad5dc29" type="audio/mpeg">
            </source>
          </audio>

      </div>
    );
  }
}



export default App;
