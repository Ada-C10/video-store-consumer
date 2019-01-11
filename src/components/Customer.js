import React from 'react';
import PropTypes from 'prop-types';
import "./Customer.css"

const Customer = (props) => {
  const { customerCallback } = props;
  return (
    <div className="customer-container">
      <div className="customer item">
        <div className="item__details">
          <h2>{props.name}</h2>
          <p></p>
          <p>{`${props.movies_checked_out_count} movies checked out`}</p>
        </div>
          <button className="item__button" onClick={() => customerCallback()}>Select for Rental</button>
      </div>
    </div>

  )
}

Customer.propTypes = {
  name: PropTypes.string,
  movies_checked_out_count: PropTypes.number,
  customerCallback: PropTypes.func,
};

export default Customer;
