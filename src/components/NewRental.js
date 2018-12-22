
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Selector from './Selector';

import './NewRental.css';


class NewRental extends Component {
  constructor(props) {
    super(props);
  }

  checkOutMovie = () => {
    this.props.rentMovieCallBack();
  }

  checkInMovie = () => {
    this.props.checkInMovieCallBack();
  }

  render() {

    return (
      <div className="new-rental">
        <div><Selector selectorType="Customer" selected={this.props.selectedCustomer}/><Selector selectorType="Movie" selected={this.props.selectedMovie}/></div>
        <div className="new-rental-buttons">
          <button onClick={this.checkOutMovie}>Check Out</button>
          <button onClick={this.checkInMovie}>Check In</button>
        </div>
      </div>
    )
  }
}

NewRental.propTypes = {
  selectedCustomer: PropTypes.string,
  selectedMovie: PropTypes.string,
  rentMovieCallBack: PropTypes.func,
  checkInMovieCallBack: PropTypes.func,
};

export default NewRental;
