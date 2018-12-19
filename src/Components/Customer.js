import React from 'react';

import PropTypes from 'prop-types';

class Customer extends React.Component {
  constructor(props) {
    super(props);
  }

  addToRentClickHander = (event) => {

  }

  render () {
    return (
      <section>
        <h3>{this.props.name}</h3>
        <p>{this.props.count}</p>
        <button
          onClick={this.addToRentClickHander}>
          Select for Rental
          </button>
      </section>
    )
  }
}

export default Customer;
