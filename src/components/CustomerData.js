import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Customer from './Customer';

class CustomerData extends Component {
  constructor() {
    super();

    this.state = {
      customers: [],
      errorMessages: []
    };
  }

  selectCustomer = (customer) => {
    this.props.selectCustomer(customer)
  }

  componentDidMount() {


    const GET_ALL_CUSTOMERS = "http://localhost:3000/customers";

    axios.get(GET_ALL_CUSTOMERS)
    .then((response) => {
      this.setState({ customers: response.data });
    })
    .catch((error) => {
      this.setState({
        errorMessages: [...this.state.errorMessages, error.message]
      });
    });
  }

  render() {
    console.log(this.state.customers);

    const loadCustomers = this.state.customers.map((customer, i) => {

      return <Customer
                    key={customer.id}
                    id={customer.id}
                    name={customer.name}
                    address={customer.address}
                    city={customer.city}
                    state={customer.state}
                    zip={customer.postal_code}
                    phone={customer.phone}
                    credit={customer.account_credit}
                    moviesRented={customer.movies_checked_out_count}
                    selectedCustomer={this.selectCustomer}
             />

    })
    return (
      <div>{loadCustomers}</div>
    )
  }
}

export default CustomerData;
