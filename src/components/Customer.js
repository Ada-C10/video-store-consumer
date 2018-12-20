import React from 'react';
import PropTypes from 'prop-types';
// import './Customer.css';


const Customer = (props) => {
  return (
      <div>
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
  selectCustomerCallback: PropTypes.func.isRequired
};

export default Customer;
