// import axios from 'axios';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

// import './CustomersSection.css';

class CustomersSection extends Component {
  constructor(props) {
    super(props);
  }

  displayCustomers = () => {
    console.log('clicked on button to display customers')
  }

  render() {

    return (
      <div>
        <p>Customers</p>
      </div>
    )
  }
}

CustomersSection.propTypes = {

};

export default CustomersSection;
