import React from 'react';
import PropTypes from 'prop-types';

const Customer = (props) => {
  const { moviesCheckedOutCount, name, selectCustomerCallback } = props
  return(
    <div><ul>
    <li>Customer {name}</li>
    <li>has checkedout {moviesCheckedOutCount} movies</li>
    <li><button onClick={() => selectCustomerCallback()}>Select for Rental</button></li>
    </ul></div>
  )
}

export default Customer;

Customer.propTypes = {
  name: PropTypes.string,
  moviesCheckedOutCount: PropTypes.number,
  selectCustomerCallback: PropTypes.func.isRequired
};
