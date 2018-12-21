import React from 'react';
import PropTypes from 'prop-types';

const CheckoutRental = (props) => {
  return (
    <button
      className="rental-selection__name"
      onClick={props.onClick}
    >
      Checkout New Rental
    </button>
  )

}

export default CheckoutRental;
