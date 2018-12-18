import axios from 'axios';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Selector from './Selector';

import './NewRental.css';


class NewRental extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <div><Selector selectorType="Customer" selected={this.props.selectedCustomer}/></div>
        <div><Selector selectorType="Movie" selected={this.props.selectedMovie}/></div>
        <button>Check Out</button>
      </div>
    )
  }
}

NewRental.propTypes = {
  selectedCustomer: PropTypes.string,
  selectedMovie: PropTypes.string,
};

export default NewRental;
