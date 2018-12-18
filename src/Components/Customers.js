import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Customer from './Customer';
// import './Customers.css';

// const customerList = [
//   {
//     "name": "Shelley Rocha",
//     "registered_at": "Wed, 29 Apr 2015 07:54:14 -0700",
//     "address": "Ap #292-5216 Ipsum Rd.",
//     "city": "Hillsboro",
//     "state": "OR",
//     "postal_code": "24309",
//     "phone": "(322) 510-8695",
//     "account_credit": 13.15
//   },
//   {
//     "name": "Curran Stout",
//     "registered_at": "Wed, 16 Apr 2014 21:40:20 -0700",
//     "address": "Ap #658-1540 Erat Rd.",
//     "city": "San Francisco",
//     "state": "California",
//     "postal_code": "94267",
//     "phone": "(908) 949-6758",
//     "account_credit": 35.66
//   }]

class Customers extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      customers: [],
      error: undefined
    }
  }
  componentDidMount(){
    const customersURL = this.props.baseUrl
    axios.get(customersURL)
    .then((response) => {
      this.setState({
        customers: response.data,
      })
    })
    .catch((error) => {
      const errorStr = `Got an error with status ${error.response.status} and message ${error.response.statusText}`
      this.setState({
        error: errorStr
      })
    })
  }

  render() {
    // const customers = this.state.customers.map( (cust, i) => {
    //   return (<Customer key={} name={} registered_at={} address={}
    //     city={} state={} postal_code={} phone={} account_credit={}/>) });
    return (
      <div >
        <h1>
          {}
        </h1>
      </div>
    );
  }
}

export default Customers;

Customers.propTypes = {
  baseUrl: PropTypes.string.isRequired
};
