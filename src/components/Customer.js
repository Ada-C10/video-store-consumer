import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Customer.css';

class Movie extends Component {
  constructor(props) {
    super(props);
  }
  render() {

    return (
      <li>
      <h1>{this.props.name}</h1>
      <p>{this.props.phone}</p>
      <p>{this.props.postal_code}</p>
      </li>
    )
  }
}

Movie.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  postal_code: PropTypes.string.isRequired,
};

export default Movie;
