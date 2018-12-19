import React, { Component } from "react";
import "./Customer.css";

class Customer extends Component {
  render() {
    return (
      <div className="customer-container-box">
        <div className="customer item">
          <div className="item__details">
            <h1> {this.props.customer.name}</h1>
            <div />
            {this.props.customer.phone} <div />
            <h1>
              <h3>
                {" "}
                Movies checked out:{" "}
                {this.props.customer.movies_checked_out_count}
              </h3>
            </h1>
          </div>
          <button
            className="customer-item__button"
            onClick={() => {
              this.props.setCustomerCallback(
                this.props.customer.id,
                this.props.customer.name
              );
            }}
          >
            {" "}
            Select for rental
          </button>
        </div>
      </div>
    );
  }
}

Customer.propTypes = {};

export default Customer;
