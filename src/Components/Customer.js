import React from 'react';
import PropTypes from 'prop-types';
import './Customer.css';

const Customer = (props) => {
  const { moviesCheckedOutCount, name, selectCustomerCallback } = props
  return(
    <div className="customer item">
    <section className="item__details"><ul>
    <h2>Customer {name}</h2>
    <p>{moviesCheckedOutCount} movies checked out</p>
    </ul></section>
    <button className="item__button" onClick={() => selectCustomerCallback()}>Select for Rental</button>
    </div>
  )
}

export default Customer;

Customer.propTypes = {
  name: PropTypes.string,
  moviesCheckedOutCount: PropTypes.number,
  selectCustomerCallback: PropTypes.func.isRequired
};
