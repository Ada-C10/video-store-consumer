import React, { Component } from 'react';

import { Route, Link } from 'react-router-dom'
import axios from 'axios';
import NewRental from './components/NewRental';
import Nav from './components/Nav';
import LibrarySection from './components/LibrarySection';
import CustomerSection from './components/CustomerSection';
import SearchSection from './components/SearchSection';
import StatusBar from './components/StatusBar';

import './App.css';

const MOVIE_RENTALS = "http://localhost:3000/rentals/";

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
    this.changeStatus('success', `Selected ${movie.title}`)
    this.setState({selectedMovie: movie.title })
  }


  selectCustomer = (customer) => {
    this.changeStatus('success', `Selected ${customer.name}`)
    this.setState({
      selectedCustomer: customer.name,
      selectedCustomerID: customer.id,
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
    axios.post(MOVIE_RENTALS + this.state.selectedMovie + "/check-out?customer_id=" + this.state.selectedCustomerID + "&due_date=" + this.state.returnDate)
    .then((response) => {
      this.changeStatus('success', `${this.state.selectedCustomer} has checked out ${this.state.selectedMovie}`)
    })
    .catch((error) => {
      this.changeStatus('error', `I'm sorry, there has been an error. Please try again.`)
    });
  }

  checkInMovie = () => {
    axios.post(MOVIE_RENTALS + this.state.selectedMovie + "/return?customer_id=" + this.state.selectedCustomerID)
    .then((response) => {
      this.changeStatus('success', `${this.state.selectedCustomer} has checked in ${this.state.selectedMovie}`)
    })
    .catch((error) => {
      this.changeStatus('error', `I'm sorry, there has been an error. Please try again. ${error.response}`)
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
        <header className="video-store__header">
          <Link to= "/"><h1>Be Kind, Rewind&lt;&lt;</h1></Link>
          <Nav />
          <NewRental selectedCustomer={this.state.selectedCustomer} selectedMovie={this.state.selectedMovie} rentMovieCallBack={this.rentMovie}
              checkInMovieCallBack={this.checkInMovie}/>
        </header>

        <StatusBar statusClass={this.state.status.statusClass} statusMessage={this.state.status.statusMessage}/>
        <Route path="/" exact="true" render={() => <SearchSection changeStatusCallback = {this.changeStatus} />} />
        <Route path="/library" render={() => <LibrarySection selectMovieCallback = {this.selectMovie} changeStatusCallback = {this.changeStatus} />} />
        <Route path="/customers" render={() => <CustomerSection selectCustomerCallback = {this.selectCustomer} changeStatusCallback = {this.changeStatus} />} />
        <Route path="/search" render={() => <SearchSection changeStatusCallback = {this.changeStatus} />} />

      </div>
    );
  }
}

export default App;
