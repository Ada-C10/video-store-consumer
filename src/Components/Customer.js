import React from 'react';

import PropTypes from 'prop-types';

class Customer extends React.Component {
  constructor(props) {
    super(props);
  }

  addToSelectCustomerHandler = (event) => {
    this.props.addToSelectCustomerHandler(this.props)
  }

  render () {
    return (
      <section>
        <h3>{this.props.name}</h3>
        <p>{this.props.count}</p>
        <button
          onClick={this.addToSelectCustomerHandler}>
          Select for Rental
          </button>
      </section>
    )
  }
}

export default Customer;
