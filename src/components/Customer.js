import React from 'react';
import PropTypes from 'prop-types';
import './Customer.css';


const Customer = (props) => {
  return (
      <div className="customer-card">
        {props.name}
        <br />
        {props.phone}
        <br />
        <p># of movies checked out</p>
        <button onClick={props.selectCustomerCallback}>Select for Rental</button>
      </div>
  )
}

Customer.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
  selectCustomerCallback: PropTypes.func,
};

export default Customer;
