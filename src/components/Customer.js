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
      <div className="customer item">
        <div className="item__details">
          <h2>{this.props.customer.name}</h2>
          <p />{" "}
          <p>
            {this.props.customer.movies_checked_out_count} Movies checked out
          </p>
        </div>
        <button className="item__button"> Select for Rental</button>
      </div>
    );
  }
}

Customer.propTypes = {
  customer: PropTypes.object
};

export default Customer;
