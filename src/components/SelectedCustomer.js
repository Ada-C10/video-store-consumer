import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles/SelectedCustomer.css';

class SelectedCustomer extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="selected-customer__container">
        <p className="selected-customer__label">Selected Customer</p>
        <p>{this.props.fullName}</p>
      </div>
    );

  }
}

export default SelectedCustomer;
