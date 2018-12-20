import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Customer from './Customer';

import './CustomerSection.css';

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

    const allCustomers = customers.map((customer, i) => {
      return <Customer
        key={i}
        name={customer.name}
        phone={customer.phone}
        selectCustomerCallback={() => this.props.selectCustomerCallback(customer)}
        />

    });

    return (
      <div className="customer-section">
        {allCustomers}
      </div>
    )
  }
}

CustomerSection.propTypes = {

};

export default CustomerSection;
