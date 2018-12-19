import React, { Component } from 'react';
import Customer from './Customer';
import axios from 'axios';

class Customers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      customers: []
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
    console.log(`In CustomerS: ${customerID}`);
    // const clickedCustomer = this.state.movies.find( movie => movie.id === movieId)
    this.props.selectedCustomerCB(customerID)
  }

  render() {

    let customers = this.state.customers

    let customerList = customers.map((customer, i) => {

      let formattedCustomer = {
        key: i,
        id: customer.id,
        name: customer.name,
        registered_at: customer.registered_at,
        address: customer.address,
        city: customer.city,
        state: customer.state,
        postal_code: customer.postal_code,
        phone: customer.phone,
        account_credit: customer.account_credit,
        movies_checked_out_count: customer.movies_checked_out_count,
        customerCB: this.findCustomerForRental,
        buttonText: 'Select for Rental',
      }

      return <Customer customer={formattedCustomer} key={formattedCustomer.key}/>

    });


    return (
      <section>
        <h2>This is Customers.</h2>
        <ul>{customerList}</ul>
      </section>
    )
  }
}

export default Customers;
