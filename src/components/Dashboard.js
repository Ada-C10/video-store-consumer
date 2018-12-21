import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Movies from './Movies';
import Customers from './Customers';
import Library from './Library';
import Home from './Home';
import axios from 'axios';
import './Dashboard.css'

class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      message: "",
      showStatus: false,
      customer: '',
      movie: '',
    }
  }

  addCustomerName = (customer) => {
    this.setState({
      customer: customer,
    });
  };

  movieActionCallback = (movie) => {
    console.log(movie);

    this.setState({
      movie: movie,
    })
  }

  closeStatusBar = () => {
    console.log("status bar closed");
    this.setState({showStatus: false});
    console.log(this.state);
  }

  addMovieStatus = (movie) => {
    this.setState({
      showStatus: true,
      message: `Successfully added ${movie.title} movie to the rental library.`
    });
  }

  checkout = () => {
    const checkoutDate = new Date(new Date().getTime()+(5*24*60*60*1000));
    let dd = checkoutDate.getDate();
    let mm = checkoutDate.getMonth() + 1;
    let y = checkoutDate.getFullYear();

    let checkoutFormattedDate = '"' + y + '-' + mm + '-'+ dd + '"';

    console.log(`Formatted date: ${checkoutFormattedDate}`);
    console.log("rental button pressed");
    const postURL = `http://localhost:3000/rentals/${this.state.movie.title}/check-out`;
    console.log(postURL);
    axios.post(postURL,{
        movie_id: this.state.movie.id,
        customer_id: this.state.customer.id,
        checkout_date: Date.today,
        due_date: checkoutFormattedDate,
      })
    .then(() => {
      this.setState({
        message: `${this.state.movie.title} checked out to ${this.state.customer.name}.`
      });

    })
    .catch((error) => {
      console.log(error.response.data.errors.title[0]);
      this.setState({
        showStatus: true,
        message: `Error: ${error.response.data.errors.title[0]}. Please select a movie for rental.`,
      });
    });
  }

  customerCountCallback = (count) => {
    this.setState({
      showStatus: true,
      message: `Successfully loaded ${count} customers.`
    })
  }

  movieCountCallback = (count) => {
    this.setState({
      showStatus: true,
      message: `Successfully loaded ${count} movies from the rental library.`
    })
  }

  searchMovieCount = (count, query) => {
    console.log("In search movie");
    this.setState({
      showStatus: true,
      message: `Successfully found ${count} movies for '${query}'.`
    })
  }
  render() {
    return(
      <Router>
        <div>

          <nav className="nav-list_container">
            <button className="dashboard-item">
              <Link to="/"  className="dashboard-link">Home</Link>
            </button>
            <button className="dashboard-item">
              <Link to="/search/" className="dashboard-link">Search</Link>
            </button>
            <button className="dashboard-item">
              <Link to="/library/" className="dashboard-link">Library</Link>
            </button>
            <button className="dashboard-item">
              <Link to="/customers/" className="dashboard-link">Customers</Link>
            </button>
          </nav>

          <div className="selected-container">
            <div className="dashboard-item container-selected-item">
              <label htmlFor="movie" className="movie-customer-label">Selected Movie</label>
              <h3 id="movie" className="selected-movie-customer" >
                {this.state.movie.title? this.state.movie.title : "None"}
              </h3>
            </div>

            <div>
              <button onClick={this.checkout} className="dashboard-item movie-customer-label">
                Check Out Rental
              </button>
            </div>

            <div className="dashboard-item container-selected-item">
              <label htmlFor="customer" className="movie-customer-label">Selected Customer</label>
              <h3 className="selected-movie-customer">
                {this.state.customer.name ? this.state.customer.name : "None"}
              </h3>
            </div>
          </div>

          <div>
              <div className={this.state.showStatus ? "status-bar status-bar--success" : "status-bar--hide"}>
                <p className={"status-bar__text"}>{this.state.message}</p>
                <button className="status-bar__button" onClick={this.closeStatusBar}>X</button>
              </div>
          </div>

          <Route path="/" exact component={Home} />
          <Route path="/search/"
            render={() => <Movies addMovieStatusCallback={this.addMovieStatus}
                moviesCount={this.searchMovieCount}/>}/>
          <Route path="/library/"
            render={() => <Library movieActionCallback={this.movieActionCallback}
                movieCount={this.movieCountCallback}/>} />
          <Route path="/customers/" render={() => <Customers customerCallback={this.addCustomerName}
              customerCount={this.customerCountCallback}/>} />

        </div>

      </Router>
    )
  }
}




export default Dashboard;
