import React, { Component } from "react";
import "./customer.css";

class Customer extends Component {
  render() {
    return (
      <div className="customer item">
        <div className="item__details">
          <h1>
            {" "}
            {this.props.customer.name}
            <p> {this.props.customer.phone} </p>
            <h2> {this.props.customer.movies_checked_out_count}</h2>
          </h1>
          <button
            className="item__button"
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
      </div>
    );
  }
}

Customer.propTypes = {};

export default Customer;
