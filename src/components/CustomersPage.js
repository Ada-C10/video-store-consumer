import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles/CustomersPage.css';

import CustomersList from './CustomersList.js';

class CustomersPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1> Customers Page :)</h1>
        <CustomersList />
      </div>
    )

  }
}


export default CustomersPage;
