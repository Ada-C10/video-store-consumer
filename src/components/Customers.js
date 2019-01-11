import React, { Component } from 'react';
import axios from 'axios';
import Customer from './Customer';
import './Customers.css';

class Customers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      customers: [],
      message: 'Loading customers...',
      showStatus: true,
    }
  }

  componentDidMount() {
      console.log("Component has mounted");
      const CUSTOMERS = "http://localhost:3000/customers";

      axios.get(CUSTOMERS)
      .then((response) => {
        this.setState({
          customers: response.data,
        });
        this.props.customerCount(this.state.customers.length);
      })
      .catch((error) => {
        this.setState({
          error: error.message
        });
      });
    }

  render(){
    const customerList = this.state.customers.map((customer, i) => {
      return <Customer
          key={i}
          {...customer}
          customerCallback={() => this.props.customerCallback(customer)}
          />
      });

    return(
      <div>
        <div className="item-list_container">
          {customerList}
        </div>
      </div>
    );
  }
}

export default Customers;
