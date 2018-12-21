import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import './styles/Customer.css';


class CheckoutRental extends Component {
  constructor() {
    super();
  }

  render () {
    return (
      <div>
        <Button className="checkout-rental-button">Checkout New Rental</Button>
      </div>

    )
  }
}

export default CheckoutRental;
