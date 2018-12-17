import React, { Component } from 'react';

class Customer extends Component  {

  render() {
    return (
      <div>

        <h1> {this.props.customer.name}</h1>
        <h1> {this.props.customer.phone} </h1>
      </div>
    )
  }
}

  Customer.propTypes = {

  };

  export default Customer;
