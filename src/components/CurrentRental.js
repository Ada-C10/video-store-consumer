import React from 'react';
import PropTypes from 'prop-types';

import './CurrentRental.css';

const CurrentRental = (props) => {
  const checkoutRentalClick = () => props.addRentalCallback();

    return (
      <div>
        <h4>Selected Movie: {props.movie.title} </h4>
        <h4>Selected Customer: {props.customer.name} </h4>
        <button className="btn btn-primary" onClick={checkoutRentalClick}>Check Out New Rental
        </button>
      </div>
    )

}

CurrentRental.propTypes = {
  movie: PropTypes.string,
  customer: PropTypes.string,
  addRentalCallback: PropTypes.func.isRequired,
}

export default CurrentRental;
