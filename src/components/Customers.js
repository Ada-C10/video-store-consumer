import React, { Component } from "react";
import axios from "axios";
import Customer from "./Customer";
import PropTypes from "prop-types";
import "./customers.css";

class Customers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      customers: []
    };
  }

  componentDidMount() {
    const url = "http://localhost:3000/customers";
    axios
      .get(url)
      .then(response => {
        const customers = response.data.map(customer => {
          return { ...customer };
        });

        this.setState({ customers });
      })
      .catch(error => {
        const errorMessage = error.message;
        this.setState({ errorMessage });
      });
  }

  populateCustomers = () => {
    return this.state.customers.map((customer, i) => {
      const newCustomer = { ...customer };
      return (
        <Customer
          key={i}
          customer={newCustomer}
          setCustomerCallback={this.props.setCustomerCallback}
        />
      );
    });
  };

  render() {
    return (
      <section>
        <h1 className="customers"> CUSTOMERS PAGE </h1>
        {this.populateCustomers()}
      </section>
    );
  }
}

Customers.propTypes = {
  customers: PropTypes.array
};

export default Customers;
