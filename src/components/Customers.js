import React from "react";
import PropTypes from 'prop-types';
import Customer from "./Customer";
import './Customers.css';

const Customers = (props) => {
    return (
      <div>
        <h2 className="customer_title">Customers</h2>
        {props.customers.map(info => {
          return <Customer key={info.id} {...info} getCustomer={props.getCustomer} />;
        })}
      </div>
    )
}

Customers.propTypes = {
  customers: PropTypes.array.isRequired,
}

export default Customers;
