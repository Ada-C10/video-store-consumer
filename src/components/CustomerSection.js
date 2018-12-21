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
    };
  }

  componentDidMount() {
    this.props.changeStatusCallback('loading', 'waiting...');
    axios.get(ALL_CUSTOMERS_URL)
    .then((response) => {
      this.setState({
        customers: response.data,
      });
      this.props.changeStatusCallback('success', `Successfully loaded ${this.state.customers.length} customers`);
    })
    .catch((error) => {
      this.props.changeStatusCallback('error', `I'm sorry, there has been an error. Please try again.`);
    });
  }

  render() {
    const { customers } = this.state;
    const sortedCustomers = customers.sort(function (a, b) {
      return ('' + a.name).localeCompare(b.name);
    })

    const allCustomers = sortedCustomers.map((customer, i) => {
      return <Customer
        key={i}
        name={customer.name}
        phone={customer.phone}
        movies={customer.movies_checked_out_count}
        memberDate={customer.registered_at}
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
  changeStatusCallback: PropTypes.func,
  selectCustomerCallback: PropTypes.func,
};

export default CustomerSection;
