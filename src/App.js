import React, { Component } from 'react';

import { Route } from 'react-router-dom'

import NewRental from './components/NewRental';
import Nav from './components/Nav';
import LibrarySection from './components/LibrarySection';
import CustomerSection from './components/CustomerSection';
import SearchSection from './components/SearchSection';

class App extends Component {

  constructor() {
    super();

    this.state = {
      selectedCustomer: "",
      selectedMovie: ""
    }
  }


  selectMovie = (movie) => {
    this.setState({selectedMovie: movie.title })
    console.log(movie)
  }


  selectCustomer = (customer) => {
    this.setState({selectedCustomer: customer.name })
    console.log(customer)
  }

  rentMovie() {
    console.log("in rentMovie")
  }


  render() {


    return (
      <div className="video-store">
          <header>
            <h1>Scarecrow Video</h1>
            <div>
              <Nav />
              <NewRental selectedCustomer={this.state.selectedCustomer} selectedMovie={this.state.selectedMovie} rentMovieCallBack={this.rentMovie}/>
            </div>
          </header>
          <span>Status Bar goes here.</span>
          <Route path="/library" render={() => <LibrarySection selectMovieCallback = {this.selectMovie} />} />
          <Route path="/customers" render={() => <CustomerSection selectCustomerCallback = {this.selectCustomer} />} />
          <Route path="/search" render={() => <SearchSection />} />

      </div>
    );
  }
}

export default App;
