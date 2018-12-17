import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Customer from './Customer';
import axios from 'axios';
import './CustomerList.css';

class CustomerList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errorMessage: "",
      customers: []
    };
  }

  componentDidMount() {

    axios.get("http://localhost:3000/customers")
    .then((response) => {

      const customers = response.data.map((customer) => {
        const newCustomer = {
          ...customer
        }
        return newCustomer
      })

      this.setState({
        customers
      })

    })
    .catch((error) => {
      this.setState({
        errorMessage: error.message
      })
    });
  }



  makeCustomerList = (customers) => {
    const customerList = customers.map((customer) => {
      return <Customer
      key={customer.id}
      name={customer.name}
      phone={customer.phone}
      postal_code={customer.postal_code}/>

    });
    return customerList
  }


  render() {

    return (
      <ul>
      { this.state.customers !== [] && this.makeCustomerList(this.state.customers)}
      </ul>
    )
  }
}

CustomerList.propTypes = {

};

export default CustomerList;
