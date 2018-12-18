import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Customer from './Customer';

// import './CustomersSection.css';

const ALL_CUSTOMERS_URL = "http://localhost:3000/customers"

class CustomerSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      customers: [],
      errors: []
    };
  }

  componentDidMount() {
    console.log("the component mounted!");

    axios.get(ALL_CUSTOMERS_URL)
    .then((response) => {
      this.setState({
        customers: response.data,
      });
    })
    .catch((error) => {
      this.setState({
        error: error.message
      });
    });
  }

  render() {

    const { customers } = this.state
    console.log(customers)

    const allCustomers = customers.map((customer, i) => {
      return <Customer
        key={i}
        name={customer.name}
        phone={customer.phone}
        />

    });

    return (
      <div>

        <p>Customers here</p>

        {allCustomers}
      </div>
    )
  }
}

CustomerSection.propTypes = {

};

export default CustomerSection;
