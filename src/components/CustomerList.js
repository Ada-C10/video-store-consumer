import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles/Customer.css';
import axios from 'axios';
import Customer from './Customer';


class CustomerList extends Component {
  constructor() {
    super();

    this.state = {
      customers: [],
    };
  }

  componentDidMount () {
    const URL = 'http://localhost:3000/customers'

    axios.get(URL)
    .then((response) => {
      const allCustomers = response.data.map((customer, i ) => {
        return <Customer key={i} {...customer} />
      });
      this.setState({customers: allCustomers});
    })
    .catch((error) => {
      this.setState({error: error.message});
    });
  }

  render () {
    return (
      <div>
        {this.state.customers}
      </div>
    )
  }
}

export default CustomerList;
