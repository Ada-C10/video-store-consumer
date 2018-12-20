import React, { Component } from 'react';

import { Route } from 'react-router-dom'
import axios from 'axios';
import NewRental from './components/NewRental';
import Nav from './components/Nav';
import LibrarySection from './components/LibrarySection';
import CustomerSection from './components/CustomerSection';
import SearchSection from './components/SearchSection';
import StatusBar from './components/StatusBar';

const RENT_MOVIE = "http://localhost:3000/rentals/";

class App extends Component {

  constructor() {
    super();

    this.state = {
      selectedCustomer: "",
      selectedCustomerID: "",
      selectedMovie: "",
      returnDate: this.getReturnDay(),
      status: {
        statusClass: 'default',
        statusMessage: ''
      }
    }
  }

  selectMovie = (movie) => {
    this.setState({selectedMovie: movie.title })
    console.log(movie)
  }


  selectCustomer = (customer) => {
    this.setState({
      selectedCustomer: customer.name,
      selectedCustomerID: customer.id
    })
  }

  changeStatus = (style, message) => {
    this.setState({
      status: {
        statusClass: style,
        statusMessage: message
      }
    })
  }

  rentMovie = () => {
    axios.post(RENT_MOVIE + this.state.selectedMovie + "/check-out?customer_id=" + this.state.selectedCustomerID + "&due_date=" + this.state.returnDate)
    .then((response) => {
      // this.props.status(`Successfully loaded ${response.data.length} movies from the rental library`, 'success');
      this.setState({
        searchResults: response.data,
      });

      this.changeStatus('test', `${this.state.selectedCustomer} has successfully checked out ${this.state.selectedMovie}`)
    })

    .catch((error) => {
      console.log('API Library call error');
      console.log(error.message);
      // this.props.status(`Failed to load movies: ${error.message}`, 'success');
    });
  }

  getReturnDay = () => {

    const date = new Date().getDate() + 5;
    const month = new Date().getMonth() + 1;
    const year = new Date().getFullYear();

    return (year + '/' + month + '/' + date);
  };

  render() {

    return (
      <div className="video-store">
          <header>
            <h1>Be Kind, Rewind</h1>
            <div>
              <Nav />
              <NewRental selectedCustomer={this.state.selectedCustomer} selectedMovie={this.state.selectedMovie} rentMovieCallBack={this.rentMovie}/>
            </div>
          </header>
          <span>Status Bar goes here.</span>


          <StatusBar statusClass={this.state.status.statusClass} statusMessage={this.state.status.statusMessage}/>


          <Route path="/library" render={() => <LibrarySection selectMovieCallback = {this.selectMovie} changeStatusCallback = {this.changeStatus} />} />
          <Route path="/customers" render={() => <CustomerSection selectCustomerCallback = {this.selectCustomer} changeStatusCallback = {this.changeStatus} />} />
          <Route path="/search" render={() => <SearchSection changeStatusCallback = {this.changeStatus} />} />

      </div>
    );
  }
}

export default App;
