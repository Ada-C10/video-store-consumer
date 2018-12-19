import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Customer from './Customer';


class CustomerLibrary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      customers: [],
      customerCount: 0,
    };
  }

  componentDidMount() {
    this.getCustomers()
  }

  getCustomers = () => {
    axios.get('http://localhost:3000/customers')
    .then((response) => {
      console.log(response.data.length);
      this.setState({
        customers: response.data,
        customerCount: response.data.length,
      });
      this.props.customerCountCallback(this.state.customerCount)
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
        created_at={customer.created_at}
        grabCustomerNameCallback={this.props.grabCustomerNameCallback}
        />
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
  customerCountCallback:PropTypes.func,
  grabCustomerNameCallback:PropTypes.func,
};

export default CustomerLibrary;
