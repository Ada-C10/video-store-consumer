import React from "react";
import { withRouter } from "react-router";
import PropTypes from "prop-types";
import Customer from "./Customer";
import "./Customers.css";

const Customers = props => {
  const customerCollection = props.customers.map(customer => {
    return (
      <Customer
        key={customer.props.id}
        id={customer.props.id}
        name={customer.props.name}
        movieCount={customer.props.movieCount}
        addCustomerNameCallback={props.addCustomerNameCallback}
      />
    );
  });
  return (
    <div className="customers">
      <div className="container">
        <h2 className="customerHeading">Customers:</h2>
        <div className="">{customerCollection}</div>
      </div>
    </div>
  );
};

Customers.propTypes = {
  addCustomerNameCallback: PropTypes.func,
  customers: PropTypes.array
};

export default withRouter(Customers);
