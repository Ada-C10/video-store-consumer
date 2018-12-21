import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'reactstrap';
import './styles/CustomerList.css';
import axios from 'axios';
import Customer from './Customer';
import ScrollUpButton from "react-scroll-up-button";


class CustomerList extends Component {
  constructor() {
    super();

    this.state = {
      customers: [],
    };
  }

  componentDidMount () {
    const URL = 'http://localhost:3000/customers';
    this.setState({alert: 'Loading directory of customers...'});

    axios.get(URL)
    .then((response) => {
      const allCustomers = response.data.map((customer, i ) => {
        return <Customer selectCustomerCallback={this.props.selectCustomerCallback} key={i} {...customer} />
      });

      const alertMessage = `Successfully loaded ${response.data.length} customers from the customers directory`
      this.setState({customers: allCustomers,
      alert: alertMessage});
    })
    .catch((error) => {
      this.setState({error: error.message});
    });
  }

  render () {
    return (
      <div>
        <div className="customer-list__container">
          <Alert color="success">{this.state.alert}</Alert>
          <div className="customer-list">
            {this.state.customers}
          </div>
        </div>
        <ScrollUpButton/>
      </div>

      
    )
  }
}

export default CustomerList;
