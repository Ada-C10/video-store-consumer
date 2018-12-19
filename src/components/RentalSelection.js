import React, { Component } from "react";
import PropTypes from "prop-types";
import "./RentalSelection.css";

class RentalSelection extends Component {
  render() {
    return (
      <div>
        <div className="new-rental-container">
          {" "}
          <div className="rental-selection header__item">
            <label className="rental-selection__label">Selected Movie</label>
            <p className="rental-selection__name">None</p>
          </div>
          <div className="customer__content">
            <p className="rental-selection-name">
              {this.props.currentCustomerName}
            </p>{" "}
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
