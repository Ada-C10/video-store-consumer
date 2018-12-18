import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Customer from './Customer';


class CustomerLibrary extends Component {
  constructor() {
    super();

    this.state = {
      customers: []
    };
  }

  componentDidMount() {
    this.getCustomers()
  }

  getCustomers = () => {
    axios.get('http://localhost:3000/customers')
    .then((response) => {
      this.setState({ customers: response.data });
    })
    .catch((error) => {
      this.setState({ error: error.message });
    });
  }


  render() {
    const allCustomers = this.state.customers.map((customer) => {
      return <Customer
        key={customer.id}
        id={customer.id}
        name={customer.name}
        address={customer.address}
        city={customer.city}
        state={customer.state}
        postal_code={customer.postal_code}
        phone={customer.phone}
        account_credit={customer.account_credit}
        created_at={customer.created_at}/>
    });

    return (
      <div >
        <div className="customers">
          {allCustomers}
        </div>
      </div>
    )
  }
}

CustomerLibrary.propTypes = {

};

export default CustomerLibrary;
 
