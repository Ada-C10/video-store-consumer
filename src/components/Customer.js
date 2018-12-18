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
        <h1 className="customer__content">
          {" "}
          {this.props.customer.name}
          <p>{this.props.customer.phone}</p>
        </h1>
      </div>
    );
  }
}

Customer.propTypes = {
  customer: PropTypes.object
};

export default Customer;
