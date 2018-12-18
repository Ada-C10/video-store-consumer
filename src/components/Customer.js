import React, { Component } from "react";
import "./customer.css";

class Customer extends Component {
  render() {
    return (
      <div>
        <h1> {this.props.customer.name}</h1>
        <h1> {this.props.customer.phone} </h1>
        <h1> {this.props.customer.movies_checked_out_count}</h1>
        <button
          onClick={() => {
            this.props.setCustomerCallback(
              this.props.customer.id,
              this.props.customer.name
            );
          }}
        >
          {" "}
          Select Customer for rental
        </button>
      </div>
    );
  }
}

Customer.propTypes = {};

export default Customer;
