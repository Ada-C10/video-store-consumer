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
      customers: []
    };
  }

  componentDidMount() {
    this.props.changeStatusCallback('loading', 'waiting...')
    axios.get(ALL_CUSTOMERS_URL)
    .then((response) => {
      this.setState({
        customers: response.data,
      });
      this.props.changeStatusCallback('success', `Successfully loaded ${this.state.customers.length} customers`)
    })
    .catch((error) => {
      this.props.changeStatusCallback('error', `I'm sorry, there has been an error. Please try again.`)
      console.log('API Library call error');
      console.log(error.message);
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
      <div>
        {allCustomers}
      </div>
    )
  }
}

CustomerSection.propTypes = {

};

export default CustomerSection;
