import React from 'react';

import PropTypes from 'prop-types';
import './Customer.css'

class Customer extends React.Component {
  constructor(props) {
    super(props);
  }

  addToSelectCustomerHandler = (event) => {
    this.props.addToSelectCustomerHandler(this.props)
  }

  render () {
    return (
      <section className="customer-item">
        <div className="item-details">
          <h2>{this.props.name}</h2>
          <p>{this.props.count} movies checked out</p>
        </div>
        <button className="item-button "
          onClick={this.addToSelectCustomerHandler}>
          Select for Rental
          </button>
      </section>
    )
  }
}

export default Customer;
