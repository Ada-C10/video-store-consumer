import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Customer  extends Component {

  render() {
    return (
      <div>
      <section>
      <h1>Testing That the Customers Pg shows up! </h1>
      </section>
      <section>
      {this.props.name}
      </section>
      </div>
    )
  }
}

Customer.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Customer ;
