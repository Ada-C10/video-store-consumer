// import axios from 'axios';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Customer from './Customer';

// import './CustomersSection.css';

class CustomersSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      customers: [
        {
          name: "Customer Name1",
          phone: "555-555-5555"
        },
        {
          name: "Customer Name2",
          phone: "555-555-5555"
        },
        {
          name: "Customer Name3",
          phone: "555-555-5555"
        }
      ]
    };
  }

  render() {
    const { customers } = this.state
    console.log(customers)

    const allCustomers = customers.map((customer, i) => {
      return <Customer
        key={i}
        name={customer.name}
        phone={customer.phone}
        />

    });

    return (
      <div>
<<<<<<< HEAD:src/components/CustomerSection.js
        <p>Customers here</p>
=======
        {allCustomers}
>>>>>>> customer_component:src/components/CustomersSection.js
      </div>
    )
  }
}

CustomersSection.propTypes = {

};

export default CustomersSection;
