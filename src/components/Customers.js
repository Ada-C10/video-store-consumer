import React, { Component } from "react";
import axios from "axios";
import Customer from "./Customer";
import PropTypes from "prop-types";
import "./Customers.css";

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
        <header> CUSTOMERS </header>
        {this.populateCustomers()}
      </section>
    );
  }
}

Customers.propTypes = {
  customers: PropTypes.array,
  changeMessageCallback: PropTypes.func,
  setCustomerCallback: PropTypes.func
};

export default Customers;
