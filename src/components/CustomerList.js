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
      return <li key={customer.id} className={"customer-list-li"}>
      <Customer
      name={customer.name}
      phone={customer.phone}
      postal_code={customer.postal_code}/>
      <button
      className={"btn btn-secondary btn-lg"}
      onClick ={ () => {this.props.selectCustomerCallback(customer)}}
      type="button">Select Customer</button>
      </li>
    });
    return customerList
  }


  render() {

    return (
      <ul className="text-white bg-dark mb-3">
      { this.state.customers !== [] && this.makeCustomerList(this.state.customers)}
      </ul>
    )
  }
}

CustomerList.propTypes = {
  selectCustomerCallback: PropTypes.func.isRequired,
};

export default CustomerList;
