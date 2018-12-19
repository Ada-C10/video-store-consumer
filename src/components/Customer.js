import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Customer.css';

class Customer extends Component {
  constructor(props) {
    super(props);
  }
  render() {

    return (
      <div className="text-white bg-dark mb-3">
      <h1>{this.props.name}</h1>
      <p>{this.props.phone}</p>
      <p>Postal Code: {this.props.postal_code}</p>
      </div>
    )
  }
}

Customer.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  postal_code: PropTypes.string.isRequired,
};

export default Customer;
