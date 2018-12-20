import React from 'react';
import PropTypes from 'prop-types';

import './CurrentRental.css';

const CurrentRental = (props) => {

    return (
      <div>
        <h4>Selected Movie: <div className="field">{props.movie.title}</div> </h4>
        <h4>Selected Customer: <div className="field">{props.customer.name}</div></h4>
        <button className="btn btn-primary" onClick={props.addRentalCallback}>Check Out New Rental
        </button>
      </div>
    )

}

CurrentRental.propTypes = {
  movie: PropTypes.object,
  customer: PropTypes.object,
  addRentalCallback: PropTypes.func.isRequired,
}

export default CurrentRental;
