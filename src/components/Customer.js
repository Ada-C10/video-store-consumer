import React from "react";
import PropTypes from "prop-types";
import "./Customer.css";

const Customer = props => {
  const { id, name, movieCount } = props;

  return (
    <section className="customerInformation">
      <h2>{name}</h2>
      <p>{movieCount} movies checked out</p>
      <button
        type="button"
        className="btn btn-info addCustomerToRental"
        onClick={() => {
          props.addCustomerNameCallback(name, id);
        }}
      >
        Select for Rental
      </button>
    </section>
  );
};

Customer.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  addCustomerNameCallback: PropTypes.func,
  movieCount: PropTypes.number
};

export default Customer;
