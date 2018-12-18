// import axios from 'axios';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

// import './CustomersButton.css';

class CustomersLink extends Component {
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

CustomersLink.propTypes = {

};

export default CustomersLink;
