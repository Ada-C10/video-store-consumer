import React from 'react';
import axios from 'axios';
import Customer from './Customer';

class Customers extends React.Component{
  constructor(){
    super();

    this.state = {
      allCustomers: [],
    }
  }

  componentDidMount(){
    const customerURL = "http://localhost:3000/customers";

    axios.get(customerURL)
    .then((response) => {
      this.setState({allCustomers: response.data})
    })
    .catch((error) => {
      console.log(error);
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
      customerInfo={formattedCustomer} />
    });

    return (
      <div>
      {allCustomers}
      </div>
    )
  }
}
  export default Customers;
