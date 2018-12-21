
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Selector from './Selector';

import './NewRental.css';


class NewRental extends Component {
  constructor(props) {
    super(props);
  }

  checkoutMovie = () => {
    this.props.rentMovieCallBack();
  }

  render() {

    return (
      <div className="new-rental">
        <div><Selector selectorType="Customer" selected={this.props.selectedCustomer}/><Selector selectorType="Movie" selected={this.props.selectedMovie}/></div>
        <button onClick={this.checkoutMovie}>Check Out</button>
      </div>
    )
  }
}

NewRental.propTypes = {
  selectedCustomer: PropTypes.string,
  selectedMovie: PropTypes.string,
  rentMovieCallBack: PropTypes.func,
};

export default NewRental;
