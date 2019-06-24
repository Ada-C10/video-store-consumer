import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Customer from './Customer.js'

class CustomersCollection  extends Component {

  constructor(props){
    super(props);

    this.state = {
      customerList: [],
    }
  }

  handleSelectCustomer = (name, id) => {
    if (this.props.onSelectCustomer) {
      this.props.onSelectCustomer( name, id);
    }
  }

  displayCustomers = () => {
  return this.state.customerList.map( (customer) => {
    // console.log("printing customer",customer.name);
    return <Customer
            name={customer.name}
            id={customer.id}
            key={customer.phone}
            phone={customer.phone}
            onSelectCustomer={this.handleSelectCustomer}
            />
  });
}

  componentDidMount() {
    const GET_ALL_CUSTOMERS = "http://localhost:3000/customers";

    axios.get(GET_ALL_CUSTOMERS)
    .then((response) => {
      this.setState({
        customerList: response.data,
      });
    })
    .catch((error) => {
      this.setState({
        error: error.message
      });
    });
  }

  render() {
    return (
      <div>
      <section>
      {this.displayCustomers()}
      </section>
      </div>

    )
  }
}

CustomersCollection.propTypes = {
  onSelectCustomer: PropTypes.func.isRequired,
};

export default CustomersCollection ;
