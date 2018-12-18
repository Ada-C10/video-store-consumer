import React, { Component } from "react";
import PropTypes from "prop-types";
import "./customer.css";

class Customer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: ""
    };
  }
  render() {
    return (
      <div className="customer">
        <div className="customer-list-container"> </div>
        <h1> {this.props.customer.name}</h1>
        <h1> {this.props.customer.phone} </h1>
      </div>
    );
  }
}

Customer.propTypes = {
  customer: PropTypes.object
};

export default Customer;
