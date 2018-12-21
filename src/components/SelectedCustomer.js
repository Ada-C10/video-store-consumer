import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles/SelectedCustomer.css';

class SelectedCustomer extends Component {

  render () {

    return (
      <div className="selected-customer__container">
        <p className="selected-customer__label">Selected Customer</p>
        <p>{this.props.fullName || "None"}</p>
      </div>
    );
  }
}

SelectedCustomer.propTypes = {
  fullName: PropTypes.string
}

export default SelectedCustomer;
