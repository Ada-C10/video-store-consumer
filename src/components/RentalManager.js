import React, { Component } from "react";
import axios from "axios";
import RentalSelection from "./RentalSelection";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Index from "./Index";
import Search from "./Search";
import Library from "./Library";
import Customers from "./Customers";


class RentalManager extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentCustomerID: "",
      currentCustomerName: "",
      currentMovieTitle: "",
      message: "",
    };
  }

  addToLibrary = movie => {
    const image_url = movie.image_url.slice(31);
    movie = { ...movie, image_url: image_url };

    axios
      .post("http://localhost:3000/movies", { movie })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        const errorMessage = error.message;
        this.setState({ errorMessage });
      });
  };

  setCustomer = (customerID, customerName) => {
    this.setState({
      currentCustomerID: customerID,
      currentCustomerName: customerName
    });
  };
  setMovie = movieTitle => {
    this.setState({
      currentMovieTitle: movieTitle
    });
  };
  changeMessage = (message) => {
    this.setState({message});
  }

  checkOut = () => {
    const changeMessage = this.changeMessage;
    if (this.state.currentCustomerID && this.state.currentMovieTitle) {
      const date = new Date(Date.now());
      date.setDate(date.getDate() + 7);

      console.log(date);

      // const url = `http://localhost:3000/rentals/${this.state.currentMovieTitle}/check-out?customer_id=${this.state.currentCustomerID}&due_date=December 25, 2018` ;
      // const url = `http://localhost:3000/rentals/Psycho/check-out?customer_id=1&due_date=${date}`;
      //
      // console.log(url);
      // axios
      //   .post(url)
      //   .then(response => {
      //     // success message to status bar
      //     console.log(response);
      //   })

      const url = `http://localhost:3000/rentals/${
        this.state.currentMovieTitle
      }/check-out?customer_id=${this.state.currentCustomerID}&due_date=${date}`;

      axios
        .post(url)
        .then(response => {
          changeMessage(
            `Successfully checked out ${this.state.currentMovieTitle} to ${
              this.state.currentCustomerName
            }!`
          );
        })

        .catch(error => {
          const errorMessage = error.message;
          changeMessage({ errorMessage });
          console.log(errorMessage);
        });
    } else {
      changeMessage(
        "Both a Customer and a Movie must be selected to create a rental."
      );
    }
  };

  render() {
    return (
      <div className="rmField">
        <h2> {this.state.currentCustomerName}</h2>
        <h2> {this.state.currentMovieTitle}</h2>
        <h2> {this.state.message} </h2>
        <RentalSelection checkOutCallback={this.checkOut} />
          <Router>
            <div>
              <nav className="nav-bar__nav">
                <ul className="nav-bar">
                  <li className="nav-bar__nav-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="nav-bar__nav-item">
                    <Link to="/search/">Go Fetch</Link>
                  </li>
                  <li className="nav-bar__nav-item">
                    <Link to="/library/">Library</Link>
                  </li>
                  <li className="nav-bar__nav-item">
                    <Link to="/customers/">Customers</Link>
                  </li>
                </ul>
              </nav>

              <Route path="/" exact component={Index} />
              <Route
                path="/search/"
                component={() => {
                  return <Search addToLibraryCallback={this.addToLibrary} />;
                }}
              />
              <Route
                path="/library/"
                component={() => {
                  return <Library setMovieCallback={this.setMovie} />;
                }}
              />
              <Route
                path="/customers/"
                component={() => {
                  return <Customers setCustomerCallback={this.setCustomer} />;
                }}
              />
            </div>
          </Router>



      </div>
    );
  }
}

RentalManager.propTypes = {
};

export default RentalManager;
