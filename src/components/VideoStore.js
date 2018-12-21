import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";
import Search from "./Search";
import Customers from "./Customers";
import Customer from "./Customer";
import Library from "./Library";

import "./VideoStore.css";

class VideoStore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customerName: "",
      customerID: "",
      movieName: "",
      alertMessage: "",
      customers: [],
      movies: []
    };
  }

  changeMessage = message => {
    this.setState({ alertMessage: message });
    setTimeout(() => this.setState({ alertMessage: "" }), 2500);
  };

  loadCustomers() {
    axios
      .get("https://videostore-hac.herokuapp.com/customers")
      .then(response => {
        const customerComponents = response.data.map(customer => {
          return (
            <Customer
              key={customer.id}
              id={customer.id}
              name={customer.name}
              movieCount={customer.movies_checked_out_count}
            />
          );
        });
        this.setState({
          customers: customerComponents
        });
      })
      .catch(error => {
        this.changeMessage(error.message);
      });
  }

  loadMovies = () => {
    axios
      .get("https://videostore-hac.herokuapp.com/")
      .then(response => {
        console.log("API get movies success!");
        const movieList = response.data.map(movie => {
          return movie;
        });
        this.setState({
          movies: movieList
        });
      })
      .catch(error => {
        console.log("error!");
        this.changeMessage(error.message);
      });
  };

  componentDidMount() {
    // API Request for customers
    this.loadCustomers();
    // API request for movies
    this.loadMovies();
  }

  addMovieName = (name, id) => {
    this.setState({
      movieName: name,
      movieID: id
    });
  };
  addCustomerName = (name, id) => {
    this.setState({
      customerName: name,
      customerID: id
    });
  };

  validateCheckout = () => {
    //   // Do rental checkout if both fields are valid/clear out old errors
    if (this.state.customerName === "" && this.state.movieName === "") {
      console.log("Both empty");
      this.changeMessage("Please select a customer and movie");
    } else if (this.state.customerName != "" && this.state.movieName === "") {
      console.log("Movie is empty");
      this.changeMessage("Please select a movie for the rental");
    } else if (this.state.customerName === "" && this.state.movieName != "") {
      console.log("Customer is empty");
      this.changeMessage("Please select a customer for the rental");
    } else {
      this.rentalCheckout();
    }
  };

  rentalCheckout = () => {
    const { movieName, customerID, customerName } = this.state;
    const url = `https://videostore-hac.herokuapp.com/rentals/${movieName}/check-out`;
    let dueDate = new Date();
    dueDate.setDate(dueDate.getDate() + 7);
    axios
      .post(url, { customer_id: customerID, due_date: dueDate })
      .then(response => {
        // callback method
        console.log("API Checkout Success!");
        console.log(response);
        this.loadCustomers();
        this.setState({
          movieName: "",
          customerID: 0,
          customerName: ""
        });
        this.changeMessage(
          `${customerName} successfully Checked out ${movieName}!`
        );
      })
      .catch(error => {
        console.log(error.response.data.errors);
        this.changeMessage("Need both a valid Movie and Customer.");
      });
  };

  render() {
    return (
      <section>
        <div className="text">
          <h1 className="text-center"> VideoStore </h1>​
        </div>
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/search">Search</Link>
              </li>
              <li>
                <Link to="/customers">Customers</Link>
              </li>
              <li>
                <Link to="/library">Library</Link>
              </li>
              <li>
                Movie Name: <span>{this.state.movieName}</span>
              </li>
              <li>
                Customer Name: <span>{this.state.customerName}</span>
              </li>
              <button className="btn btn-info" onClick={this.validateCheckout}>
                Submit Rental
              </button>
            </ul>
            <h4 duration={5000} className="alertMessage text-center">
              {this.state.alertMessage}
            </h4>
            <Route
              exact
              path="/"
              render={() => (
                <Library
                  addMovieNameCallback={this.addMovieName}
                  movies={this.state.movies}
                />
              )}
            />
            <Route
              path="/search"
              render={() => <Search updateMoviesCallback={this.loadMovies} />}
            />
            <Route
              path="/customers"
              render={() => (
                <Customers
                  addCustomerNameCallback={this.addCustomerName}
                  customers={this.state.customers}
                />
              )}
            />
            <Route
              path="/library"
              render={() => (
                <Library
                  addMovieNameCallback={this.addMovieName}
                  movies={this.state.movies}
                />
              )}
            />
          </div>
        </Router>
      </section>
    );
  }
}
export default VideoStore;
