import React, { Component } from 'react';
import Customer from './Customer';
import PropTypes from 'prop-types';
import axios from 'axios';
import './Customers.css'


class Customers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      customers: [],
    };
  }

  componentDidMount() {
    const GET_CUSTOMERS_URL = 'http://localhost:3000/customers';

    axios.get(GET_CUSTOMERS_URL)
    .then((response) => {
      this.setState({
        customers: response.data
      });
    })
    .catch((error) => {
      this.setState({
        error: error.message
      });
    });
  }

  findCustomerForRental = (customerID) => {
    const clickedCustomer = this.state.customers.find( customer => customer.id === customerID)
    this.props.selectedCustomerCB(clickedCustomer)
  }

  render() {

    let customers = this.state.customers

    let customerList = customers.map((customer, i) => {

      let formattedCustomer = {
        key: i,
        id: customer.id,
        name: customer.name,
        account_credit: customer.account_credit,
        movies_checked_out_count: customer.movies_checked_out_count,
        customerCB: this.findCustomerForRental,
        buttonText: 'Select for Rental',
      }

      return <Customer customer={formattedCustomer} key={formattedCustomer.key}/>

    });


    return (
      <section className="customers-container">
        {customerList}
      </section>
    )
  }
}

Customer.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  account_credit: PropTypes.number,
  movies_checked_out_count: PropTypes.number,
  customerCB: PropTypes.func,
  buttonText: PropTypes.string,
};

export default Customers;
