import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Customer  extends Component {

  handleClickOnCustomer = () => {
    if (this.props.onSelectCustomer) {
      this.props.onSelectCustomer(this.props.name);
    }
  }

  render() {
    return (
      <div>
      <section>
      <h1>Testing That the Customers Pg shows up! </h1>
      </section>
      <section>
      {this.props.name}
      </section>
      <button onClick={this.handleClickOnCustomer}>Select A Customer</button>
      </div>
    )
  }
}

Customer.propTypes = {
  name: PropTypes.string.isRequired,
  onSelectCustomer: PropTypes.func,
};

export default Customer ;
