import React, { Component } from 'react';
import PropTypes from 'prop-types'
import "./AllCustomers.css"
import Customer from './Customer'

import axios from 'axios';

const URL = "http://localhost:3000/customers"

class AllCustomers extends Component {
  constructor() {
    super();
    this.state = {
      customers: [],
    }
  }

componentDidMount() {
  axios.get(URL)
  .then((response) => {
    // console.log(response);
    const customers = response.data.map((customer) => {
      return customer
    })
    this.setState({
      customers: customers,
    })
    // console.log(this.state.customers)
  })
  .catch((error) => {
    console.log(error.message);
    this.setState({
      error: error.message,
      // add error messages buy mapping through check validations??
    })
  })
}

render() {
  const customers = this.state.customers.map((customer, i) => {
    const name = `Add ${customer.name} to Rent a Movie`
    return <Customer
      key={i}
      id={customer.id}
      name={customer.name}
      movies_checked_out_count={customer.movies_checked_out_count}
      button={name}
      callback={()=>this.props.updatedCustomerCallback(customer)}
     />
    })

  return (
    <div className="top-table">
    {customers}
    </div>
  )
}

}

AllCustomers.propTypes = {
  updatedCustomerCallback: PropTypes.func,
};

export default AllCustomers;
