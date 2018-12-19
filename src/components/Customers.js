import React from "react";
import PropTypes from 'prop-types';
import './Customers.css';

const Customers = props => {
  return (
    <div>
      <h2 className="customer_title">Customers</h2>
      {props.getCustomerList()}
      {props.customers}
    </div>
  )
}


Customers.propTypes = {
  getCustomerList: PropTypes.func.isRequired,
  customers: PropTypes.array.isRequired,
}

export default Customers;
