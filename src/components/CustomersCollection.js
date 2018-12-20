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

  handleSelectCustomer = (name) => {
    console.log("printing name in hnadleSelectCustoomer in customerscollect", name);
    if (this.props.onSelectCustomer) {
      this.props.onSelectCustomer( name);
    }
  }

  displayCustomers = () => {
  return this.state.customerList.map( (customer) => {
    // console.log("printing customer",customer.name);
    return <Customer
            name={customer.name}
            key={customer.id}
            onSelectCustomer={this.handleSelectCustomer}
            />
  });
}

  componentDidMount() {
    console.log("The component did in fact mount");
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
  customerList: PropTypes.array.isRequired,
  onSelecCustomer: PropTypes.func,
};

export default CustomersCollection ;
