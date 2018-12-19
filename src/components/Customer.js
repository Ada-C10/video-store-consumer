import React from 'react';
import PropTypes from 'prop-types';

import './Customer.css';

const Customer = (props) => {
  const { id, name, movies_checked_out_count } = props;
  const onCustomerClick = () => props.rentCustomerCallback(id, name);

  return (
    <div className="customers">
      <h4>{name}</h4>
      <p>{movies_checked_out_count} movies checked out</p>
      <button className="customer-btn" onClick={onCustomerClick}>Select Customer</button>
    </div>
  );
};

Customer.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  movies_checked_out_count: PropTypes.number.isRequired,
  rentCustomerCallback: PropTypes.func.isRequired,
}

export default Customer;
