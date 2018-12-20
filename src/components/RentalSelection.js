import React, { Component } from "react";
import PropTypes from "prop-types";
import "./RentalSelection.css";
import axios from 'axios';

class RentalSelection extends Component {
  constructor(props) {
    super(props)

    this.state = {
      message: "",
    }
  }

  changeMessage = (message) => {
    this.setState({message});
    setTimeout(() => this.setState({message: ""}), 4000)

  }

  checkOut = () => {
    const changeMessage = this.changeMessage;
    if (this.props.currentCustomerID && this.props.currentMovieTitle) {
      const date = new Date(Date.now());
      date.setDate(date.getDate() + 7);

      const url = `http://localhost:3000/rentals/${
        this.props.currentMovieTitle
      }/check-out?customer_id=${this.props.currentCustomerID}&due_date=${date}`;

      axios
        .post(url)
        .then(response => {
          changeMessage(
            `Successfully checked out ${this.props.currentMovieTitle} to ${
              this.props.currentCustomerName
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

      <div className="header__controls">
        <div className="status-bar">
          <p className="status-bar__text">{this.state.message}</p>
        </div>
        <div className="new-rental">

            <div className="rental-selection header__item">
              <label className="rental-selection__label">Selected Customer</label>
              <p className="rental-selection__name">{this.props.currentCustomerName}</p>
            </div>

            <div className="rental-selection header__item">
              <label className="rental-selection__label">Selected Movie</label>
              <p className="rental-selection__name">{this.props.currentMovieTitle}</p>
            </div>

            <button
              className="new-rental__check-out-button header__item"
              onClick={this.checkOut}
            >
              Check Out New Rental
            </button>
        </div>

      </div>

    );
  }
}

RentalSelection.propTypes = {
  currentCustomerID: PropTypes.string,
  currentCustomerName: PropTypes.string,
  currentMovieTitle: PropTypes.string
};

export default RentalSelection;
