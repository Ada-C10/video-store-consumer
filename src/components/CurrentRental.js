import React from 'react';
import PropTypes from 'prop-types';

import './CurrentRental.css';

const CurrentRental = (props) => {
  const checkoutRentalClick = () => props.addRentalCallback();

    return (
      <div>
          <label htmlFor="movie">Selected Movie:</label>
          <input readOnly
            name="movie"
            value={props.movie.title}
            className="form-control mr-sm-2"/>

          <label htmlFor="customer">Selected Customer:</label>
          <input readOnly
            name="customer"
            value={props.customer.name}
            className="form-control mr-sm-2" />
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
