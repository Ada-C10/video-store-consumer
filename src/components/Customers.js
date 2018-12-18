import React from 'react';
import axios from 'axios';
import Customer from './Customer';
import PropTypes from 'prop-types';

class Customers extends React.Component{
  constructor(){
    super();

    this.state = {
      allCustomers: [],
      errorMessages: [],
    }
  }

  componentDidMount(){
    const customerURL = "http://localhost:3000/customers";

    axios.get(customerURL)
    .then((response) => {
      this.setState({allCustomers: response.data})
    })
    .catch((error) => {
      this.setState({
        errorMessages: [...this.state.errorMessages, error.message]
      });
    })
  }

  render(){
    const allCustomers = this.state.allCustomers.map((customer, i) => {
      const formattedCustomer = {
        id: customer.id,
        name: customer.name,
      }

      return <Customer
      key={i}
      customerInfo={formattedCustomer}
      selectCustomer={() => {this.props.selectCustomer(formattedCustomer)}} />
    });

    return (
      <div>
      {this.state.errorMessages}
      {allCustomers}
      </div>
    )
  }
}

Customers.propTypes = {
  selectCustomer: PropTypes.func.isRequired,
}
  export default Customers;
