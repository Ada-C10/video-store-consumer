import React, { Component } from "react";
import PropTypes from "prop-types";
import "./RentalSelection.css";

class RentalSelection extends Component {
  render() {
    return (
      <div className="customer-content-box">
        <div className="customer__content">
          <div className="rental-selection-name">
            Rental name goes here
            {this.props.currentCustomerName}{" "}
            <p>{this.props.currentMovieTitle}</p>{" "}
          </div>
          <button
            className="rental-item__button"
            onClick={this.props.checkOutCallback}
          >
            Check Out
          </button>
        </div>
      </div>
    );
  }
}

RentalSelection.propTypes = {
  checkOutCallback: PropTypes.func,
  currentCustomerName: PropTypes.number,
  currentMovieTitle: PropTypes.string
};

export default RentalSelection;
